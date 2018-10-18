import * as React from "react";
import { observer } from "mobx-react";
import { navigationStore } from "../../stores/navigation";
import classNames from "classnames";
import { isEmpty } from "lodash";
import * as styles from "./styles.css";

export interface Props {
  href?: string;
  external?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => any;
  activeClassName?: string;
  activeMatch?: RegExp;
  [name: string]: any;
}

export const isActive = ({
  href,
  external = false,
  activeMatch
}: Props): boolean => {
  if (external) {
    return false;
  }
  if (activeMatch) {
    return navigationStore.banglessPath.match(activeMatch) !== null;
  }
  return href === navigationStore.banglessPath;
};

@observer
export class Link extends React.Component<Props> {
  render() {
    const {
      href,
      external,
      className,
      activeClassName,
      activeMatch,
      ...rest
    } = this.props;
    const active = !isEmpty(activeClassName) && isActive({ href, external, activeMatch });
    const anchorProps = {
      ...rest,
      className: classNames(
        styles.link,
        { [activeClassName || ""]: active },
        className
      )
    };
    if (external) {
      (anchorProps as any).href = href;
    } else {
      const oldOnClick = anchorProps.onClick;
      const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof oldOnClick === "function") {
          oldOnClick(event);
        }
        if (href) {
          navigationStore.navigate(href);
        }
      };
      anchorProps.onClick = onClick;
    }
    return isEmpty(href) ? <span {...anchorProps} /> : <a {...anchorProps} />;
  }
}
