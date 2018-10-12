import * as React from "react";

interface Props {
  page: string;
  [prop: string]: any;
}

interface State {
  Page: typeof React.Component | null;
  loading: boolean;
  error: string | null;
}

export class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { Page: null, loading: true, error: null };
  }

  render() {
    const { page, ...args } = this.props;
    const { loading, error, Page } = this.state;
    if (loading) {
      return <div>"loading"</div>;
    }
    if (error) {
      return <div>{error.toString()}</div>;
    }
    return Page ? <Page {...args} /> : null;
  }

  async componentDidMount() {
    this.loadPage();
  }

  async componentDidUpdate({ page }: Props) {
    if (this.props.page !== page) {
      this.loadPage();
    }
  }

  async loadPage() {
    this.setState({ loading: true, error: null });
    try {
      const Page = (await import(`../../pages/${this.props.page}.md`)).default;
      this.setState({ Page, loading: false });
    } catch (e) {
      console.log(e)
      this.setState({ loading: false, error: e });
    }
  }
}
