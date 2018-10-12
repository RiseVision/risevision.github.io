import * as React from "react";
import * as styles from "./styles.css";
import { RiseIcon } from "../RiseIcon";
import { navigationStore, HOME } from "../../stores/navigation";

export class TopBar extends React.PureComponent<{}> {
  render() {
    return (
      <div className={styles.container}>
        <a className={styles.logo} onClick={() => navigationStore.navigate(HOME)}>
          <RiseIcon width={20} />
          <div className={styles.logoText}>
            <div className={styles.logoHeader}>RISE</div>
            <div className={styles.logoSeparator}>|</div>
            <div className={styles.logoSubheader}>Developers</div>
          </div>
        </a>
      </div>
    );
  }
}
