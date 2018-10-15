import * as React from "react";
import { Page } from "../Page";
import * as styles from "./styles.css";
import { TopBar } from "../TopBar";
import { Router } from "../Router";

export class App extends React.PureComponent<{}> {
  render() {
    return (
      <div className={styles.container}>
        <TopBar />
        <div className={styles.content}>
          <Router />
        </div>
      </div>
    );
  }
}
