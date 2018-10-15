interface Item {
  name: string;
  page?: string;
  link?: string;
  items?: Item[];
}

interface Section {
  name: string;
  items: Item[];
}

interface TOC {
  sections: Section[];
}

export const tableOfContents: TOC = {
  sections: [
    {
      name: "Introduction",
      items: [
        {
          name: "Getting Started",
          page: "GettingStarted"
        },
        {
          name: "Installation",
          page: "Installation",
          items: [
            {
              name: "Mainnet",
              page: "installation/Mainnet"
            },
            {
              name: "Testnet",
              page: "installation/Testnet"
            }
          ]
        }
      ]
    },
    {
      name: "API Reference",
      items: [
        {
          name: "HTTP Client",
          link: "api"
        },
        {
          name: "JavaScript Client",
          link: "rise-js"
        }
      ]
    }
  ]
};
