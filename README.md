# risevision.github.io

## Installation

Clone the repository with `git clone --recurse-submodules https://github.com/RiseVision/risevision.github.io.git`. Change into the directory and run `npm install`. The docs require you to be able to compile the `rise-node` and run on **Node.js v8.x**

## Generating Docs

Simply run `npm run build:docs` and follow the instructions to generate the REST docs as well as the TypeScript client reference. Docs should be regenerated on API changes, API client changes or on modifying the code samples for the REST API.

## Publishing

Run `npm run build` to build the static html. And then push to origin to publish!

## Developing

Run `npm run build:dev` to run the Webpack Dev Server

### Adding Pages

All the markdown documents are located in `src/pages`.
A `[link href="INTERNAL_HREF"]` macro for internal links is available, in addition to JSX in markdown.
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

### Adding Code Samples

Code samples for the REST API can be found in `assets/rest/samples`. The filename of the sample file determines to which endpoint the sample belongs to and are constructed by combining the OpenAPI `operationId` with the HTTP method. Please view `assets/rest/samples/javascript` for some examples. In addition, when adding new languages edit the `rc-openapi-gen.conf.js` to include your language with the appropriate extension under `samples.languages`.
