import * as React from "react";
import { TableOfContents } from "../TableOfContents";
import { observer } from "mobx-react";
import { Page } from "../Page";
import * as styles from "./styles.css";
import classNames from "classnames";
import { navigationStore } from "../../stores/navigation";
import { fancyScroll } from "../../styles/fancyScroll.css";
import { isTouchScreen } from "../../helpers/isTouchScreen";

@observer
export class Pages extends React.Component {
  pageContainer: HTMLDivElement | null;

  render() {
    return (
      <div className={styles.container}>
        <div
          className={classNames(styles.tableOfContents, {
            [fancyScroll]: !isTouchScreen()
          })}
        >
          <TableOfContents />
        </div>
        <div
          className={classNames(styles.content, {
            [fancyScroll]: !isTouchScreen()
          })}
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
