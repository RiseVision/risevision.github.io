import * as React from "react";
import { Page } from "./Page";
import * as styles from "../styles/root.css";
import classNames from 'classnames'
import { TopBar } from './TopBar'

export class App extends React.PureComponent<{}> {
  render() {
    return (
      <div className={classNames(styles.container)}>
        <TopBar/>
      </div>
    );
  }
}
