import * as React from "react";
import * as styles from "./styles.css";

interface Props {
  children: React.ReactNode;
}

export class TableOfContents extends React.Component<Props> {
  render() {
    return (
      <nav className={styles.container}>
        <div className={styles.title}>Table Of Contents</div>
        <div className={styles.links}>{this.props.children}</div>
      </nav>
    );
  }
}
