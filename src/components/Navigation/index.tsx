import * as React from "react";
import * as styles from "./styles.css";
import { List as LinkList } from "../Link/List";
import { generateItems } from "../Link/List/helpers";
import { navigation } from "../../constants/navigation";
import { Item } from "./Item";
import { Collapsed } from "./Collapsed";
import { FlyOutMenu } from "../FlyOutMenu";
import { navFlyOutMenuStore } from "../../stores/flyOutMenu";

export class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Collapsed />
        <FlyOutMenu store={navFlyOutMenuStore}>
          <LinkList className={styles.list}>
            {generateItems(navigation.items, Item)}
          </LinkList>
        </FlyOutMenu>
      </div>
    );
  }
}
