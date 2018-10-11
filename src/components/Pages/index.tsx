import * as React from "react";
import { TableOfContents } from "../TableOfContents";
import * as styles from "./styles.css";

export class Pages extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tableOfContents}>
          <TableOfContents />
        </div>
        <div className={styles.content} />
      </div>
    );
  }
}
