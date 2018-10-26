import * as React from "react";
import { Item } from "./Item";
import { Section } from "./Section";
import { map, isEmpty, set, compose } from "lodash/fp";
import * as styles from "./styles.css";
import { tableOfContents } from "../../constants/pages";
import { generateItems } from "../Link/List/helpers";
import { FlyOutMenu } from "../FlyOutMenu";
import { tocFlyOutMenuStore } from '../../stores/flyOutMenu'

export class TableOfContents extends React.PureComponent<{}> {
  render() {
    return (
      <FlyOutMenu className={styles.container} store={tocFlyOutMenuStore}>
        <ul className={styles.list}>
          {map(
            ({ name, items }) => (
              <Section name={name} key={name || "root"}>
                {generateItems(items, Item)}
              </Section>
            ),
            tableOfContents.sections
          )}
        </ul>
      </FlyOutMenu>
    );
  }
}
