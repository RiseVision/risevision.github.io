const fs = require('fs')

const root = 'libraries/rise-node-priv'
const package = require(`./${root}/package.json`)
const README = fs.readFileSync(`./${root}/README.md`).toString()
const packagesWithApis = [
  'core-accounts',
  'core-blocks',
  'core-consensus-dpos',
  'core-multisignature',
  'core-p2p',
  'core-secondsignature',
  'core-transactions',
  'core'
].join('|')

module.exports = {
  controllers: `${root}/packages/+(${packagesWithApis})/dist/apis/**/!(index)*.js,${root}/packages/+(${packagesWithApis})/dist/*Api.js`,
  schemas: `${root}/packages/+(${packagesWithApis})/schema/*.json,${root}/packages/+(${packagesWithApis}|core-apis)/dist/schema/**/responses.js`,
  out: 'src/constants/swagger.json',
  static: {
    info: {
      title: 'RISE Node',
      version: package.version,
      description: README
    },
    "x-servers": [
      {
        url: 'https://wallet.rise.vision',
        description: 'Mainnet'
      },
      {
        url: 'http://localhost:5566',
        description: 'Local Testnet'
      }
    ]
  },
  baseSchema: {
    Buffer: {
      id: "Buffer",
      type: "string",
      format: "binary"
    }
  },
  samples: {
    dir: 'assets/rest/samples',
    languages: {
      javascript: {
        extension: 'js'
      }
    }
  }
}
