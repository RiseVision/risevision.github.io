import * as React from "react";
import * as styles from "./styles.css";
import { Section } from "./Section";
import { Item } from "./Item";

export class TableOfContents extends React.PureComponent<{}> {
  render() {
    return (
      <ul className={styles.container}>
        <Section name="Introduction">
          <Item name="Getting Started" path="pages/GettingStarted" />
          <Item name="Installation" path="pages/Installation">
            <Item name="Testnet" path="pages/installation/Testnet" />
            <Item name="Mainnet" path="pages/installation/Mainnet" />
          </Item>
          <Item name="API Reference" path="api" />
          <Item name="Javascript Client" path="rise-ts" />
        </Section>
      </ul>
    );
  }
}
