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
      name: "Quick Start",
      items: [
        {
          name: "Introduction",
          page: "quick-start/Introduction"
        },
        {
          name: "Create an Account",
          page: "quick-start/CreateAnAccount"
        },
        {
          name: "Create a Transaction",
          page: "quick-start/CreateATransaction"
        },
        {
          name: "Inspecting Transactions",
          page: "quick-start/PollingTransactions"
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
            },
            {
              name: "Docker",
              page: "node/installation/Docker"
            }
          ]
        },
        {
          name: "Node Management",
          page: "node/Management",
          items: [
            {
              name: "Forging",
              page: "node/management/Forging"
            },
            {
              name: "API Access",
              page: "node/management/APIAccess"
            },
            {
              name: "Folder Structure",
              page: "node/management/FolderStructure"
            },
            {
              name: "Advanced Configuration",
              page: "node/management/Configuration"
            }
          ]
        }
      ]
    },
    {
      name: "Protocol",
      items: [
        {
          name: "Consensus",
          page: "protocol/Consensus"
        },
        {
          name: "Accounts",
          page: "protocol/Identity"
        },
        {
          name: "Transactions",
          page: "protocol/Transactions"
        },
        {
          name: "Blocks",
          page: "protocol/Blocks"
        },
        {
          name: "Peers",
          page: "protocol/PeerToPeer"
        }
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
        },
        {
          name: "Elixir Client",
          external: "https://github.com/1india/rise-elixir"
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
