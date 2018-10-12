import * as React from "react";
import * as ReactDOM from "react-dom";
import { Loader } from "../Loader";

interface Props {
  page: string;
  anchor?: string;
  [prop: string]: any;
}

interface State {
  Page: typeof React.Component | null;
  styles: { container?: string };
  loading: boolean;
  error: string | null;
}

export class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { Page: null, loading: true, error: null, styles: {} };
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
      <div className={styles.container}>
        <Page {...args} />
      </div>
    ) : null;
  }

  async componentDidMount() {
    this.loadPage();
  }

  async componentDidUpdate({ page, anchor }: Props, { loading }: State) {
    if (this.props.page !== page) {
      this.loadPage();
    }
    if (
      (this.state.loading !== loading && this.state.loading === false) ||
      this.props.anchor !== anchor
    ) {
      const element = document.getElementById(this.props.anchor || "");
      if (element) {
        element.scrollIntoView();
      }
    }
  }

  async loadPage() {
    this.setState({ loading: true, error: null });
    try {
      const [pageModule, styles] = await Promise.all([
        import(`../../pages/${this.props.page}.md`),
        import("./styles.css")
      ]);
      this.setState({ Page: pageModule.default, styles, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false, error: e });
    }
  }
}
