import * as React from "react";
import { TableOfContents } from "../TableOfContents";
import { observer } from "mobx-react";
import { Page } from "../Page";
import * as styles from "./styles.css";
import { navigationStore } from "../../stores/navigation";

@observer
export class Pages extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tableOfContents}>
          <TableOfContents />
        </div>
        <div className={styles.content}>
          <Page page={navigationStore.path} />
        </div>
      </div>
    );
  }
}
