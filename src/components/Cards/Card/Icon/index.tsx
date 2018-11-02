import * as React from "react";
import {
  CancelablePromise,
  makeCancelable,
  CanceledError
} from "../../../../helpers/makeCancelable";

interface Props {
  name: string;
}

interface State {
  loading: boolean;
  Svg?: typeof React.Component;
  error?: string;
}

export class Icon extends React.Component<Props, State> {
  private pending: CancelablePromise;

  constructor(props: Props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    const { loading, error, Svg } = this.state;
    if (loading || error) {
      return null;
    }
    return Svg ? <Svg /> : null;
  }

  async componentDidMount() {
    this.loadSvg();
  }

  async componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      this.loadSvg();
    }
  }

  componentWillUnmount() {
    this.pending.cancel();
  }

  async loadSvg() {
    this.setState({ loading: true, error: undefined });
    try {
      if (this.pending) {
        this.pending.cancel();
      }
      this.pending = makeCancelable(import(`./svg/${this.props.name}.svg`));
      const Svg = (await this.pending.promise).default;
      this.setState({
        Svg,
        loading: false,
        error: undefined
      });
    } catch (err) {
      if (err instanceof CanceledError) {
        return;
      }
      this.setState({ loading: false, error: err });
    }
  }
}
