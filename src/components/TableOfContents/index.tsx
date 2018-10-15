import * as React from "react";
import { Item } from "./Item";
import { Section } from "./Section";
import { map, isEmpty } from "lodash/fp";
import * as styles from "./styles.css";
import { tableOfContents, Item as TOCItem } from "../../constants/pages";

const generateItems = (items: TOCItem[]) => {
  return map(({ name, page, external, link, items }) => {
    let href = link || "";
    if (page) {
      href = "pages/" + page;
    }
    if (external) {
      href = external;
    }
    return (
      <Item name={name} href={href} external={!!external}>
        {items ? generateItems(items) : null}
      </Item>
    );
  }, items);
};

export class TableOfContents extends React.PureComponent<{}> {
  render() {
    return (
      <ul className={styles.container}>
        {map(
          ({ name, items }) => (
            <Section name={name}>{generateItems(items)}</Section>
          ),
          tableOfContents.sections
        )}
      </ul>
    );
  }
}
