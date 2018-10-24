import { ConfigItem } from "../components/Link/List/helpers";

export const navigation: { items: ConfigItem[] } = {
  items: [
    { name: "Guides", page: "Home", matches: /^pages.*/i },
    { name: "API Reference", link: "api" },
    {
      name: "Client Libraries",
      items: [
        { name: "JavaScript", link: "rise-js" },
        {
          name: "Python Client",
          external: "https://github.com/RiseVision/rise-py"
        },
        {
          name: "Java Client",
          external: "https://github.com/RiseVision/java-wrapper-api"
        }
      ]
    }
  ]
};
