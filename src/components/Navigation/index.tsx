import * as React from "react";
import * as styles from "./styles.css";
import { List as LinkList } from "../Link/List";
import { generateItems } from "../Link/List/helpers";
import { navigation } from "../../constants/navigation";
import { Item } from "./Item";

export class Navigation extends React.Component {
  render() {
    return (
      <LinkList className={styles.container}>
        {generateItems(navigation.items, Item)}
      </LinkList>
    );
  }
}
