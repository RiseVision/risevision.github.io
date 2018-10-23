import * as React from "react";
import { Sticky } from "../Sticky";
import { Item } from "./Item";
import { Section } from "./Section";
import { map, isEmpty, set, compose } from "lodash/fp";
import * as styles from "./styles.css";
import { tableOfContents } from "../../constants/pages";
import { generateItems } from "../Link/List/helpers";

export class TableOfContents extends React.PureComponent<{}> {
  render() {
    return (
      <Sticky>
        <ul className={styles.container}>
          {map(
            ({ name, items }) => (
              <Section name={name} key={name}>
                {generateItems(items, Item)}
              </Section>
            ),
            tableOfContents.sections
          )}
        </ul>
      </Sticky>
    );
  }
}
