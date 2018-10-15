import * as React from "react";
import * as ReactDOM from "react-dom";
import { Loader } from "../Loader";
import { Link } from '../Link'
import {
  CancelablePromise,
  makeCancelable,
  CanceledError
} from "../../helpers/makeCancelable";

interface Props {
  page: string;
  anchor?: string;
  tick: number;
  [prop: string]: any;
}

interface State {
  Page?: typeof React.Component;
  styles?: typeof import("./styles.css");
  loading: boolean;
  error: string | null;
}

export class Page extends React.Component<Props, State> {
  private pending: CancelablePromise;

  constructor(props: Props) {
    super(props);
    this.state = { loading: true, error: null };
  }

  render() {
    const { page, anchor, ...args } = this.props;
    const { loading, error, Page, styles } = this.state;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <div>{error.toString()}</div>;
    }
    return Page ? (
      <div className={styles!.container}>
        <Page Link={Link} {...args} />
      </div>
    ) : null;
  }

  async componentDidMount() {
    this.loadPage();
  }

  async componentDidUpdate({ page, anchor, tick }: Props, { loading }: State) {
    if (this.props.page !== page) {
      this.loadPage();
    }
    if (
      (this.state.loading !== loading && this.state.loading === false) ||
      this.props.anchor !== anchor ||
      this.props.tick !== tick
    ) {
      const element = document.getElementById(this.props.anchor || "");
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: Math.max(0, y - 100),
          behavior: "smooth"
        });
      }
    }
  }

  componentWillUnmount() {
    this.pending.cancel();
  }

  async loadPage() {
    this.setState({ loading: true, error: null });
    try {
      this.pending = makeCancelable(
        Promise.all([
          import(`../../pages/${this.props.page}.md`),
          import("./styles.css")
        ])
      );
      const [pageModule, styles] = await this.pending.promise;
      this.setState({
        Page: pageModule.default,
        styles,
        loading: false,
        error: null
      });
    } catch (e) {
      if (e instanceof CanceledError) {
        return;
      }
      console.log(e.class.name)
      this.setState({ loading: false, error: e });
    }
  }
}
