import * as React from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import { some, map, matches, isEmpty } from "lodash/fp";
import { Link, isActive } from "../../";
import { List as LinkList } from "../";

interface Styles {
  container?: string;
  active?: string;
  activeItemParent?: string;
  name?: string;
  items?: string;
  activeItems?: string;
}

export interface Props {
  name: string;
  href?: string;
  external?: boolean;
  activeMatch?: RegExp;
  styles?: Styles;
  children?: JSX.Element | JSX.Element[];
}

@observer
export class Item extends React.Component<Props> {
  render() {
    const styles = this.props.styles || ({} as Styles);
    const activeChildren =
      !isEmpty(styles.activeItems || styles.activeItemParent) &&
      some(isActive, map("props", React.Children.toArray(this.props.children)));

    return (
      <li className={styles.container}>
        <Link
          className={classNames(styles.name, {
            [styles.activeItemParent || ""]: activeChildren
          })}
          activeClassName={styles.active}
          activeMatch={this.props.activeMatch}
          href={this.props.href}
          external={this.props.external}
        >
          {this.props.name}
        </Link>
        {this.props.children ? (
          <LinkList
            className={classNames(styles.items, {
              [styles.activeItems || ""]: activeChildren
            })}
          >
            {this.props.children}
          </LinkList>
        ) : null}
      </li>
    );
  }
}
