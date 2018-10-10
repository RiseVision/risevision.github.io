import * as React from "react";
import * as styles from "../styles/topBar.css";
import classNames from "classnames";
import { RiseIcon } from "./RiseIcon";

export class TopBar extends React.PureComponent<{}> {
  render() {
    return (
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.logo)}>
          <RiseIcon width={20} />
            <div className={classNames(styles.logoText)}>
        <div className={classNames(styles.logoHeader)}>RISE</div>
        <div className={classNames(styles.logoSeparator)}>|</div>
        <div className={classNames(styles.logoSubheader)}>Developers</div>
        </div>
        </div>
      </div>
    );
  }
}
