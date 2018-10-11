import * as React from "react";
import { Page } from "../Page";
import * as styles from "./styles.css";
import { TopBar } from "../TopBar";
import { Router } from '../Router'
import { hot } from "react-hot-loader";

class Root extends React.PureComponent<{}> {
  render() {
    return (
      <div className={styles.container}>
        <TopBar />
        <Router />
      </div>
    );
  }
}

export const App = hot(module)(Root)
