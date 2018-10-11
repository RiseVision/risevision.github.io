import * as React from "react";
import * as styles from "./styles.css";

interface Props {
  name: string;
  children: React.ReactNode;
}

export class Section extends React.PureComponent<Props> {
  render() {
    return (
      <li className={styles.container}>
        <div className={styles.name}>{this.props.name}</div>
        {this.props.children ? (
          <ul className={styles.items}>{this.props.children}</ul>
        ) : null}
      </li>
    );
  }
}
