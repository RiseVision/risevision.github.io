import * as React from "react";
import { TableOfContents } from "../TableOfContents";
import { observer } from "mobx-react";
import { Page } from "../Page";
import * as styles from "./styles.css";
import { navigationStore } from "../../stores/navigation";

@observer
export class Pages extends React.Component {
  pageContainer: HTMLDivElement | null;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tableOfContents}>
          <TableOfContents />
        </div>
        <div
          className={styles.content}
          ref={ref => (this.pageContainer = ref)}
        >
          <Page
            page={navigationStore.path}
            anchor={navigationStore.bang}
            tick={navigationStore.tick}
            container={this.pageContainer}
          />
        </div>
      </div>
    );
  }
}
