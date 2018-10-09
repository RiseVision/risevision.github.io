const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const tsLoader = {
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    experimentalWatchApi: true
  }
}

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime']
  }
}

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: 'index.js',
    publicPath: '/assets/js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
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
        use: [babelLoader, { loader: '@hugmanrique/react-markdown-loader' }]
      },
      {
        test: /\.tsx?$/,
        use: [babelLoader, tsLoader]
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  }
}
