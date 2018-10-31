const { split, map, reject, isEmpty, fromPairs } = require('lodash/fp')
const regex = /\[[^\/]?([^\]\s]*)((\s?([^\s=]+)="([^\s=]+)")*?)\]([\S\s]*?)\[\/\1\]/gi

/**
 * USAGE
 *
 * Include macros in your markdown in the following format:
 *
 * [tag prop1="data" prop2="another"]content markdown[/tag]
 *
 * `macro` (in this case "tag") gets mapped to a function in `macros` below
 * with the following type signature
 *
 * (
 *   content: string,             # content in macro ("content markdown")
 *   props: { [string]: string }, # props object ({ prop1: "data", prop2: "another" })
 *   original: string,            # original macro string found ("[tag prop="data" prop2="another"]content markdown[/tag]")
 *   position: integer,           # position in source document
 *   context: string              # source document
 * } => string                    # replacement string
 *
 * `macro` gets replaced with the outputted strng and then will be parsed by
 * the markdown loader
 *
 */

const macros = {
  table: content => {
    return `{{ <div className="table-wrapper"> }}${content}{{ </div> }}`
  },
  link: (content, { href }) => {
    console.log(content, href)
    const x = `{{ <props.Link href="${href}">${content}</props.Link> }}`
    console.log(x)
    return x
  }
}

const gatherProps = propString => {
  const props = {}
  const propsRegex = /(\S+)="([\s\S]*?)"/gi
  let match = propsRegex.exec(propString)
  while (match) {
    let [_m, key, value] = match
    props[key] = value
    match = propsRegex.exec(propString)
  }
  return props
}

const replacer = (original, macro, propString, ...rest) => {
  if (typeof macros[macro] !== 'function') {
    return original
  }
  const content = rest[rest.length - 3]
  const position = rest[rest.length - 2]
  const context = rest[rest.length - 1]
  const props = gatherProps(propString)
  return macros[macro](content, props, original, position, context)
}

module.exports = function(source) {
  return source.replace(regex, replacer)
}
