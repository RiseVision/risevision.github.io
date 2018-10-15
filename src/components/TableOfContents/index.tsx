import * as React from "react";
import { Item } from "./Item";
import { Section } from "./Section";
import { map } from "lodash/fp";
import * as styles from "./styles.css";
import { tableOfContents } from "../../constants/pages";

export class TableOfContents extends React.PureComponent<{}> {
  render() {
    // return (
    //   <ul className={styles.container}>
    //     {map(() => {}, tableOfContents.sections)}
    //   </ul>
    // );
    return (
      <ul className={styles.container}>
        <Section name="Introduction">
          <Item name="Getting Started" path="pages/GettingStarted" />
          <Item name="Installation" path="pages/Installation">
            <Item name="Testnet" path="pages/installation/Testnet" />
            <Item name="Mainnet" path="pages/installation/Mainnet" />
          </Item>
          <Item name="API Reference" path="api" />
          <Item name="Javascript Client" path="rise-js" />
        </Section>
      </ul>
    )
  }
}
