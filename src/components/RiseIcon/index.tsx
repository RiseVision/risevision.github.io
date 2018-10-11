import * as React from "react";
import { cls1, cls2, cls3, cls4, cls5 } from "./styles.css";

interface Props {
  width?: number;
  height?: number;
}

export class RiseIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 96"
        {...this.props}
      >
        <path
          className={cls1}
          d="M4.195,27.934L37.307,2.5c3.4-2.608,8.042-2.259,10.377.781S49.158,10.9,45.762,13.51L12.649,38.942c-3.4,2.608-8.042,2.259-10.377-.781S0.8,30.543,4.195,27.934Z"
        />
        <path
          className={cls2}
          d="M4.195,54.934L37.307,29.5c3.4-2.609,8.042-2.259,10.377.781S49.158,37.9,45.762,40.51L12.649,65.942c-3.4,2.608-8.042,2.259-10.377-.781S0.8,57.543,4.195,54.934Z"
        />
        <path
          className={cls3}
          d="M4.195,82.934L37.307,57.5c3.4-2.608,8.042-2.259,10.377.781S49.158,65.9,45.762,68.51L12.649,93.942c-3.4,2.608-8.042,2.259-10.377-.781S0.8,85.543,4.195,82.934Z"
        />
        <circle className={cls4} cx="42" cy="88" r="8" />
        <circle className={cls5} cx="8" cy="8" r="8" />
      </svg>
    );
  }
}
