import * as React from "react";
import { ClipLoader } from "react-spinners";
import * as styles from "./styles.css";

export class Loader extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <ClipLoader />
      </div>
    );
  }
}
