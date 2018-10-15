import * as React from "react";
import { navigationStore } from "../../stores/navigation";
import classNames from "classnames";
import * as styles from "./styles.css";

export interface Props {
  href: string;
  external?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => any;
  [name: string]: any;
}

export class Link extends React.PureComponent<Props> {
  render() {
    const { href, external, className, ...rest } = this.props;
    const anchorProps = {
      ...rest,
      className: classNames(styles.link, className)
    };
    if (external) {
      (anchorProps as any).href = href;
    } else {
      const oldOnClick = anchorProps.onClick;
      const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof oldOnClick === "function") {
          oldOnClick(event);
        }
        navigationStore.navigate(href);
      };
      anchorProps.onClick = onClick;
    }
    return <a {...anchorProps} />;
  }
}
