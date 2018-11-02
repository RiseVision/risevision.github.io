const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const rehypeHighlight = require('rehype-highlight')
const remarkSlug = require('remark-slug')
const remarkNormalizeHeadings = require('remark-normalize-headings')

const tsLoader = {
  loader: 'ts-loader',
  options: {}
}

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import'
    ]
  }
}

const cssLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    namedExport: true,
    camelCase: true,
    localIdentName: '[folder]_[local]__[hash:base64:5]'
  }
}

const mdLoader = {
  loader: '@hugmanrique/react-markdown-loader',
  options: {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [remarkNormalizeHeadings, remarkSlug]
  }
}

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: 'index.js',
    publicPath: '/assets/js/'
  },
  resolve: {
    extensions: ['*', '.md', '.css', '.js', '.jsx', '.ts', '.tsx']
  },
  mode: 'production',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [babelLoader, { loader: 'svg-react-loader' }]
      },
      {
        test: /\.md$/,
        use: [
          babelLoader,
          mdLoader,
          { loader: 'md-macro-loader' },
          { loader: 'toc-loader' }
        ]
      },
      {
        test: /\.css$/,
        enforce: 'pre',
        use: [
          { loader: 'style-loader' },
          cssLoader,
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [babelLoader, tsLoader]
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  }
}
