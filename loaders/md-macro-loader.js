const { split, map, reject, isEmpty, fromPairs } = require('lodash/fp')
const regex = /\[[^\/]?([^\]\s]*)((\s?([^\s=]+)=([^\s=]+))*)\]([^(]?[^\[]*)\[\/\1\]/gi

const macros = {
  toc: () => {
    return `
{{<this.props.TableOfContents>}}
## toc

## end toc
{{</this.props.TableOfContents>}}
    `
  },
  link: (content, { href }) => {
    return `{{ <props.Link href="${href}">${content}</props.Link> }}`
  }
}

const replacer = (original, macro, propString, ...rest) => {
  if (typeof macros[macro] !== 'function') {
    return original
  }
  const content = rest[rest.length - 3]
  const position = rest[rest.length - 2]
  const context = rest[rest.length - 1]
  const props = fromPairs(
    map(prop => split('=', prop), reject(isEmpty, split(/\s+/, propString)))
  )
  return macros[macro](content, props, original, position, context)
}

module.exports = function(source) {
  return source.replace(regex, replacer)
}
