import * as React from "react";
import { Item, Props as ItemProps } from "./Item";
import { map, compose, set } from "lodash/fp";

export interface LinkConfigItem extends ItemProps {
  items?: ConfigItem[];
}

export interface ConfigItem {
  name: string;
  page?: string;
  link?: string;
  external?: string;
  matches?: RegExp | string;
  items?: ConfigItem[];
}

const parseLink = (props: ConfigItem): string => {
  const { link, page, external, items } = props;
  let href = link || "";
  if (page) {
    href = "pages/" + page;
  }
  if (external) {
    href = external;
  }
  return href;
};

const toLinks = (items: ConfigItem[]): LinkConfigItem[] => {
  return map(
    (props): LinkConfigItem =>
      compose(
        set("href", parseLink(props)),
        set("external", !!props.external),
        set(
          "activeMatch",
          props.matches ? new RegExp(props.matches) : undefined
        )
      )(props) as LinkConfigItem,
    items
  );
};

export const generateItems = (
  configItems: ConfigItem[],
  ItemComponent = Item
) => {
  return map(item => {
    const { items, ...props } = item;
    return (
      <ItemComponent {...props} key={item.name}>
        {items ? generateItems(items, ItemComponent) : undefined}
      </ItemComponent>
    );
  }, toLinks(configItems));
};
