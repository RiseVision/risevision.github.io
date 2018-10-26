import * as React from "react";
import { observer } from "mobx-react";
import * as styles from "./styles.css";
import {
  tocFlyOutMenuStore,
  navFlyOutMenuStore
} from "../../../stores/flyOutMenu";
import { navigationStore, handlers } from "../../../stores/navigation";
import NavIcon from "react-feather/dist/icons/menu";
import TocIcon from "react-feather/dist/icons/book";

@observer
export class Collapsed extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {navigationStore.handler == handlers.PAGES ? (
          <a className={styles.item} onClick={() => tocFlyOutMenuStore.open()}>
            <span className={styles.title}>Select Chapter</span>
            <TocIcon />
          </a>
        ) : null}
        <a className={styles.item} onClick={() => navFlyOutMenuStore.open()}>
          <NavIcon />
        </a>
      </div>
    );
  }
}
