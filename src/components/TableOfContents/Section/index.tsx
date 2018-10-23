import * as React from "react";
import * as styles from "./styles.css";
import { List as LinkList } from "../../Link/List";

interface Props {
  name?: string;
  children?: JSX.Element | JSX.Element[];
}

export class Section extends React.PureComponent<Props> {
  render() {
    return (
      <li className={styles.container}>
        {this.props.name ? (
          <div className={styles.name}>{this.props.name}</div>
        ) : null}
        {this.props.children ? (
          <LinkList className={styles.items}>{this.props.children}</LinkList>
        ) : null}
      </li>
    );
  }
}
