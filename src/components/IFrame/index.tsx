import * as React from "react";
import { Loader } from "../Loader";
import * as styles from "./styles.css";
import classNames from "classnames";

interface Props {
  url: string;
}

interface State {
  loading: boolean;
}

export class IFrame extends React.Component<Props, State> {
  iframe: HTMLElement | null;

  constructor(props: Props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.loading ? <Loader /> : null}
        <iframe
          className={classNames(styles.iframe, {
            [styles.hidden]: this.state.loading
          })}
          sandbox="allow-scripts"
          src={this.props.url}
          ref={ref => (this.iframe = ref)}
        />
      </div>
    );
  }

  shouldComponentUpdate(_nextProps: Props, { loading }: State) {
    return loading !== this.state.loading;
  }

  componentDidMount() {
    if (!this.iframe) {
      return;
    }
    this.iframe.onload = () => {
      console.log("happens");
      this.setState({ loading: false });
    };
  }
}
