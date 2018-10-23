import * as React from "react";
import * as styles from "./styles.css";
import classNames from "classnames";

interface Props {
  className?: string;
}

export class Sticky extends React.PureComponent<Props> {
  render() {
    const { className, ...props } = this.props;
    return <div className={classNames(styles.sticky, className)} {...props} />;
  }
}
