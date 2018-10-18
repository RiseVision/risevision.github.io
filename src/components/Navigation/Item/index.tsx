import * as React from "react";
import * as styles from "./styles.css";
import { Item as LinkListItem } from '../../Link/List/Item'

interface Props {
  name: string;
  href?: string;
  external?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export class Item extends React.Component<Props> {
  render() {
      return <LinkListItem {...this.props} styles={styles}/>
  }
}
