import * as React from "react";
import * as styles from "./styles.css";
import { observer } from "mobx-react";
import classNames from "classnames";
import { navigationStore } from "../../../stores/navigation";
import { some, map, matches, filter } from "lodash/fp";
import { Link } from "../../Link";

interface Props {
  name: string;
  href: string;
  external?: boolean;
  children?: React.ReactNode;
}

@observer
export class Item extends React.Component<Props> {
  render() {
    const active =
      !this.props.external && this.props.href == navigationStore.banglessPath;
    const activeChildren =
      !active &&
      some(
        matches({ href: navigationStore.banglessPath }),
        filter(
          ({ external }: Props) => !external,
          map("props", React.Children.toArray(this.props.children))
        )
      );
    return (
      <li className={styles.container}>
        <Link
          className={classNames(styles.name, { [styles.active]: active })}
          href={this.props.href}
          external={this.props.external}
        >
          {this.props.name}
        </Link>
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
