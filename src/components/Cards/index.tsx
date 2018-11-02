import * as React from "react";
import * as styles from "./styles.css";

interface Props {
  children: JSX.Element[];
}

export class Cards extends React.Component<Props> {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}
