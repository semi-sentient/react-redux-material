const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  node: path.resolve(__dirname, 'node_modules'),
  src: path.resolve(__dirname, 'src')
};

const config = {
  // Base directory for our app (where app entry point is located)
  context: paths.src,

  // Dev server can be reached by running "npm start" and navigating to http://localhost:8080
  devServer: {
    compress: true,
    historyApiFallback: true,
    inline: true
  },

  // Generate source-maps on production only
  devtool: isProduction ? 'source-map' : 'eval',

  // Entry points for chunks (app and vendor) which ultimately results in compiled JS
  entry: {
    // Bundle for application specific code only (no vendor libraries)
    app: './index.js',

    // Bundle for vendor dependencies (react, redux, etc.)
    vendor: [
      'axios',
      'babel-polyfill', // emulates the full ES2015 environment (Promise, WeakMap, Object.assign, Array.from, etc)
      'lodash',
      'material-ui',
      'moment',
      'prop-types',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-tap-event-plugin',
      'redux',
      'redux-thunk'
    ]
  },

  module: {
    rules: [
      // NOTE Babel loader expects .babelrc to know what transformations to run (latest, react, etc)
      {
        test: /\.js$/,
        include: paths.src,
        use: [{
          loader: 'babel-loader'
        }]
      },

      // NOTE ExtractTextPlugin will create a separate bundle for our CSS instead of bundling with JS
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',   // parse CSS into JS and resolve dependencies
            'sass-loader'   // transform Sass into CSS
          ]
        })
      }
    ]
  },

  output: {
    path: paths.dist,
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  plugins: [
    // Copy files to the "dist" directory after the build has completed.
    /*new CopyWebpackPlugin([
      { from: `${paths.src}/favicon.ico` }
    ]),*/

    // Will create a new CSS bundle using app-specific style definitions
    new ExtractTextPlugin('[name].bundle.css'),

    // Will auto-generate dist/index.html with scripts injected
    new HtmlWebPackPlugin({
      template: `${paths.src}/index.html`,
      inject: 'body'
    }),

    // Will allow us to access IS_PRODUCTION directly in source code
    new webpack.DefinePlugin({
      IS_PRODUCTION: process.env.NODE_ENV === 'production'
    }),

    // Will output module names when changes are logged to console (HMR)
    new webpack.NamedModulesPlugin(),

    // Will separate vendor (library) code from app code for injection into HTML
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ],

  resolve: {
    modules: [
      paths.node,
      paths.src
    ]
  }
};

module.exports = config;
