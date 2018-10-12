const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const rehypeHighlight = require('rehype-highlight')
const remarkSlug = require('remark-slug')

const tsLoader = {
  loader: 'ts-loader',
  options: {
    transpileOnly: true
  }
}

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      'react-hot-loader/babel',
      'emotion'
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
  devtool: 'inline-source-map',
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: 'index.js',
    publicPath: '/assets/js/'
  },
  resolve: {
    extensions: ['*', '.md', '.css', '.js', '.jsx', '.ts', '.tsx']
  },
  mode: 'development',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
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
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname,
    compress: true,
    hot: true,
    port: 9000
  }
}
