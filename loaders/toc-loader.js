const remark = require('remark')
const slug = require('remark-slug')
const outerToc = require('remark-outer-toc')
const normalizeHeadings = require('remark-normalize-headings')
const loaderUtils = require('loader-utils')
const path = require('path')
const fs = require('fs')

module.exports = function(source) {
  const callback = headers => {
    const fileNameRe = /(.*)\/src\/pages\/(.*)\./gi
    const match = fileNameRe.exec(this.resourcePath.replace(/\\/g, '/'))
    const root = match[1]
    const fileName = match[2]
    const newFile = path.join(root, 'src', 'constants', 'toc', fileName + '.ts')
    const newFileDir = path.dirname(newFile)
    const fileData = `export default ${JSON.stringify(headers, null, 2)}`

    if (!fs.existsSync(newFileDir)) {
      fs.mkdirSync(newFileDir, { recursive: true })
    }
    fs.writeFileSync(newFile, fileData)
  }
  remark()
    .use(slug)
    .use(normalizeHeadings)
    .use(outerToc, {
      callback: callback.bind(this),
      id: true,
      depth: 3
    })
    .processSync(source)
  return source
}
