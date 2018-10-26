import * as React from "react";
import * as ReactDOM from "react-dom";
import { Loader } from "../Loader";
import { Link } from "../Link";
import classNames from "classnames";
import { TableOfContents, TOCItem } from "./TableOfContents";
import {
  CancelablePromise,
  makeCancelable,
  CanceledError
} from "../../helpers/makeCancelable";

interface Props {
  page: string;
  anchor?: string;
  tick: number;
  container: HTMLDivElement | null;
  [prop: string]: any;
}

interface State {
  Page?: typeof React.Component;
  frontMatter?: {
    toc?: boolean;
  };
  toc?: TOCItem[];
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
    const { page, anchor, container, ...args } = this.props;
    const { loading, error, Page, styles, toc, frontMatter } = this.state;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <div>{error.toString()}</div>;
    }
    const hasToc = toc!.length > 1 && !(frontMatter!.toc === false);
    return Page ? (
      <div className={styles!.container}>
        <div
          className={classNames(styles!.pageContainer, {
            [styles!.withToc]: hasToc
          })}
        >
          <Page Link={Link} {...args} />
        </div>
        {hasToc ? <TableOfContents toc={toc!} /> : null}
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
      if (element && this.props.container) {
        const y = element.getBoundingClientRect().top + this.props.container.scrollTop;
        this.props.container.scroll({
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
          import(`../../constants/toc/${this.props.page}`),
          import("./styles.css")
        ])
      );
      const [pageModule, tocModule, styles] = await this.pending.promise;
      this.setState({
        Page: pageModule.default,
        frontMatter: pageModule.frontMatter || {},
        toc: tocModule.default || [],
        styles,
        loading: false,
        error: null
      });
    } catch (e) {
      if (e instanceof CanceledError) {
        return;
      }
      this.setState({ loading: false, error: e });
    }
  }
}
