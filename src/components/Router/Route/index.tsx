import * as React from "react";
import { Loader } from "../../Loader";

interface Props {
  resolver: () => Promise<JSX.Element>;
}
interface State {
  rendered?: JSX.Element;
  loading: boolean;
  error: Error | null;
}

export class Route extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      error: null
    };
  }

  render() {
    const { loading, error, rendered } = this.state;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <div>{error.toString()}</div>;
    }
    return rendered;
  }

  async componentDidMount() {
    this.loadRoute();
  }

  async componentDidUpdate({ resolver }: Props) {
    if (this.props.resolver !== resolver) {
      this.loadRoute();
    }
  }

  async loadRoute() {
    this.setState({ loading: true, error: null });
    try {
      const rendered = await this.props.resolver();
      this.setState({ rendered, loading: false, error: null });
    } catch (e) {
      this.setState({ error: e.toString(), loading: false });
    }
  }
}
