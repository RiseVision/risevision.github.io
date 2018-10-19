# risevision.github.io

## Installation

Run `npm install` and then `./scripts/init_submodules.sh`

## Generating Docs

Simply run `./scripts/generate_docs.sh` and follow the instructions.

## Publishing

Run `npm run build` to build the static html. And then push to origin to publish!

## Developing

Run `npm run build:dev` to run the Webpack Dev Server

### Adding Pages

All the markdown documents are located in `src/pages`. The macros `[toc]` for a table of contents
and `[link href=href]` for internal links are available as well as JSX.
See `./loaders/md-macro-loader.js` and [mapbox/jsxtreme-markdown](https://github.com/mapbox/jsxtreme-markdown) for more information

To update navigation edit either `src/constants/pages` for the Guides' Table of Contents
or `src/constants/navigation` for the Top Bar Navigation. Navigation entries use the following format:

```TypeScript
interface NavigationItem {
    name: string, // link label
    link?: string, // internal link location
    page?: string, // Guide's page location (without extension e.g. "GettingStarted")
    external?: string, // external link location
    items?: NavigationItem[]
}
```
