import { ConfigItem } from "../components/Link/List/helpers";

export const navigation: { items: ConfigItem[] } = {
  items: [
    { name: "Guides", page: "GettingStarted", matches: /^pages.*/i },
    { name: "API Reference", link: "api" },
    {
      name: "Client Libraries",
      items: [{ name: "JavaScript", link: "rise-js" }]
    }
  ]
};
