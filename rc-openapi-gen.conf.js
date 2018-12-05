const fs = require('fs')

const root = 'libraries/rise-node'
const package = require(`./${root}/package.json`)
const README = fs.readFileSync(`./${root}/README.md`).toString()

module.exports = {
  controllers: `${root}/dist/apis/!(index|transport)*.js`,
  schemas: `${root}/dist/schema/*.js,${root}/dist/schema/+(common|responses)/*.js`,
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
      },
      python: {
        extension: 'py'
      }
    }
  }
}
