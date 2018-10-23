import { ConfigItem } from "../components/Link/List/helpers";

export interface Section {
  name?: string;
  items: ConfigItem[];
}

export interface TOC {
  sections: Section[];
}

export const tableOfContents: TOC = {
  sections: [
      {
        items: [
        {
          name: "Getting Started",
          page: "Home"
        },
        {
          name: "Lightpaper",
          external: "https://downloads.rise.vision/lightpaper.pdf"
        }
        ]
      },
    {
      name: "Node",
      items: [
        {
          name: "Installation",
          page: "node/Installation",
          items: [
            {
              name: "Mainnet",
              page: "node/installation/Mainnet"
            },
            {
              name: "Testnet",
              page: "node/installation/Testnet"
            }
          ]
        },
        {
          name: "Node Management",
          page: "node/Management",
          items: [
            {
              name: "Folder Structure",
              page: "node/management/FolderStructure"
            }
          ]
        },
      ]
    },
    {
      name: "API",
      items: [
        {
          name: "REST API Reference",
          link: "api"
        },
        {
          name: "JavaScript Client",
          link: "rise-js"
        },
        {
          name: "Python Client",
          external: "https://github.com/RiseVision/rise-py"
        },
        {
          name: "Java Client",
          external: "https://github.com/RiseVision/java-wrapper-api"
        }
      ]
    },
    {
      name: "Connect",
      items: [
        {
          name: "Github",
          external: "https://github.com/RiseVision"
        },
        {
          name: "Slack",
          external: "http://slack.rise.vision/"
        },
        {
          name: "Telegram",
          external: "https://t.me/risevisionofficial"
        },
        {
          name: "Bounty Program",
          external: "https://rise.vision/developer-bounties-2/"
        }
      ]
    }
  ]
};
