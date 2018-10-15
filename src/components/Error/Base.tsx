import * as React from "react";
import * as styles from "./styles.css";

export interface Props {
  header?: string;
  subheader?: string;
}
export class BaseError extends React.PureComponent<Props> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>{this.props.header}</div>
        <div className={styles.subheader}>{this.props.subheader}</div>
      </div>
    );
  }
}
