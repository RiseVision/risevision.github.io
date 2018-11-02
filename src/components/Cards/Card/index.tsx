import * as React from "react";
import { Icon } from "./Icon";
import * as styles from "./styles.css";
import { Link } from "../../Link";

interface Props {
  icon: string;
  title: string;
  href: string;
  action: string;
  external?: boolean;
  children: React.ReactNode;
}

export class Card extends React.Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.icon}>
          <Icon name={this.props.icon} />
        </div>
        <div className={styles.description}>{this.props.children}</div>
        <Link className={styles.link} href={this.props.href} external={this.props.external}>
          {this.props.action}
        </Link>
      </div>
    );
  }
}
