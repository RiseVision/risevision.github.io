import * as React from "react";
import * as styles from "./styles.css";
import { observer } from "mobx-react";
import classNames from "classnames";
import { navigationStore } from "../../../stores/navigation";
import { some, map, matches } from "lodash/fp";

interface Props {
  name: string;
  path: string;
  children?: React.ReactNode;
}

@observer
export class Item extends React.Component<Props> {
  render() {
    const active = this.props.path == navigationStore.banglessPath;
    const activeChildren =
      !active &&
      some(
        matches({ path: navigationStore.banglessPath }),
        map("props", React.Children.toArray(this.props.children))
      );
    return (
      <li className={styles.container}>
        <a
          className={classNames(styles.name, { [styles.active]: active })}
          onClick={() => navigationStore.navigate(this.props.path)}
        >
          {this.props.name}
        </a>
        {this.props.children ? (
          <ul
            className={classNames(styles.items, {
              [styles.visible]: active || activeChildren
            })}
          >
            {this.props.children}
          </ul>
        ) : null}
      </li>
    );
  }
}
