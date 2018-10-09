import * as React from "react";

interface Props {
  page: string;
  [prop: string]: any;
}

interface State {
  page: typeof React.Component | null;
  loading: boolean;
  error: string | null;
}

export class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { page: null, loading: true, error: null };
  }

  render() {
    const { page, ...args } = this.props;
    return this.state.page ? <this.state.page {...args} /> : null;
  }

  async componentDidMount() {
    try {
      const page = (await import(`../pages/${this.props.page}.md`)).default;
      this.setState({ page, loading: false });
    } catch (e) {
      this.setState({ loading: false, error: e });
    }
  }
}
