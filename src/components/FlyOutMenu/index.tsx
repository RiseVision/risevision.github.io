import * as React from "react";
import * as styles from "./styles.css";
import { observer } from "mobx-react";
import classNames from "classnames";
import { FlyOutMenuStore } from "../../stores/flyOutMenu";
import CloseIcon from "react-feather/dist/icons/x";

interface Props {
  children: JSX.Element | JSX.Element[];
  store: FlyOutMenuStore;
  className?: string;
  [name: string]: any;
}

@observer
export class FlyOutMenu extends React.Component<Props> {
  render() {
    const open = this.props.store.isOpen;
    return (
      <div
        className={classNames(
          styles.container,
          { [styles.open]: open },
          this.props.className
        )}
      >
        <a
          className={styles.closeIcon}
          onClick={() => this.props.store.close()}
        >
          <CloseIcon />
        </a>
        {this.props.children}
      </div>
    );
  }
}
