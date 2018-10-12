import * as React from "react";
import { RedocStandalone } from "redoc";

interface Props {
  [prop: string]: any;
}

interface State {
  Page: typeof React.Component | null;
  spec: Object | null;
  loading: boolean;
  error: string | null;
}

export class Redoc extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { Page: null, spec: null, loading: true, error: null };
  }

  render() {
    const { page, ...args } = this.props;
    const { loading, error, Page, spec } = this.state;
    if (loading) {
      return <div>"loading"</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    return Page ? <Page spec={spec} {...args} /> : null;
  }

  async componentDidMount() {
    this.loadPage();
  }

  async loadPage() {
    this.setState({ loading: true, error: null });
    try {
      const [Redoc, spec] = await Promise.all([
        import("redoc"),
        import("../../constants/swagger.json")
      ]);
      this.setState({ Page: Redoc.RedocStandalone, spec, loading: false });
    } catch (e) {
      this.setState({ loading: false, error: e });
    }
  }
}
