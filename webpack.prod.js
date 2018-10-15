const path = require('path')
const webpack = require('webpack')
const rehypeHighlight = require('rehype-highlight')
const remarkSlug = require('remark-slug')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
        test: /\.md$/,
        use: [
          babelLoader,
          {
            loader: '@hugmanrique/react-markdown-loader',
            options: {
              rehypePlugins: [rehypeHighlight],
              remarkPlugins: [remarkSlug]
            }
          }
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
  }
}
