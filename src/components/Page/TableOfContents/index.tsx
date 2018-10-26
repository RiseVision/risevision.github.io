import * as React from "react";
import * as styles from "./styles.css";
import { map, range } from "lodash/fp";
import { Sticky } from "../../Sticky";

export interface TOCItem {
  depth: number;
  value: string;
  id: string;
}

interface Props {
  toc: TOCItem[];
}

export class TableOfContents extends React.Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Table Of Contents</div>
        <ul className={styles.links}>
          {map(({ id, depth, value }) => {
            const indent =
              depth > 1
                ? map(
                    depth => <div className={styles.spacer} key={depth} />,
                    range(2, depth)
                  )
                : null;
            return (
              <li key={id}>
                {indent}
                <a className={styles.link} href={`#${id}`}>
                  {value}
                </a>
              </li>
            );
          }, this.props.toc.slice(1))}
        </ul>
      </div>
    );
  }
}
