const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
<<<<<<< HEAD
var nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 * Config
 */
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
//TODO install html-webpack-plugin correctly

>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4
var config = {
  // for faster builds use 'eval'
  devtool: 'source-map',
  // cache: false,

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'core': './src/app/extensions/render/core.js',
    'app': './src/app/app',
  },
  // target: 'electron-renderer',
  
  externals: {
    ioredis: {
      commonjs: "ioredis",
      amd: "ioredis",
      root: "ioredis" // indicates global variable
    },
<<<<<<< HEAD
=======
    'electron-config': 'electron-config',
>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4
    path: 'require("path")',
    sequelize: {
      commonjs: "sequelize",
      amd: "sequelize",
      root: "sequelize" // indicates global variable
    },
<<<<<<< HEAD
    
    winston:'require("winston")'
=======

    winston: 'require("winston")'
>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4

  },

  output: {
    path: helpers.root('src/app/dist'),
    filename: '[name].js',
    libraryTarget : 'commonjs-module',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {

    extensions: ['.ts', '.js', '.json', '.css', '.html'],

    // An array of directory names to be resolved to the current directory
    modules: [helpers.root('src'), 'node_modules'],

  },

  module: {
    rules: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
<<<<<<< HEAD
        
        exclude: [/\.(spec|e2e)\.ts$/]
=======
        exclude: ['/\.(spec|e2e)\.ts$/','/\.(extensions)']
      },
      {
        test: /\.(extensions)\.ts$/,
        loaders: ['ts-loader']
>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4
      },

      // Support for *.json files.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
      },

      // support for .html antd .css as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('app/index.html')]
      },

      // support for fonts
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=dist/[name]-[hash].[ext]'
      },

      // support for svg icons
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
    ]
  },
  plugins: [

    // Plugin: CommonsChunkPlugin
    // Description: Shares common code between the pages.
    // It identifies common modules and put them into a commons chunk.
    //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    // See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    // See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills'],
      minChunks: Infinity
    }),
    // Plugin: CopyWebpackPlugin
    // Description: Copy files and directories in webpack.
    //
    // Copies project static assets.
    //
    // See: https://www.npmjs.com/package/copy-webpack-plugin
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),
<<<<<<< HEAD
    new HtmlWebpackPlugin({ title: 'Tree-shaking' }),
=======
    // new HtmlWebpackPlugin({ title: 'Tree-shaking' }),
>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4
    /**
     * Plugin LoaderOptionsPlugin (experimental)
     *
     * See: https://gist.github.com/sokra/27b24881210b56bbaff7
     */
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        /**
         * Static analysis linter for TypeScript advanced options configuration
         * Description: An extensible linter for the TypeScript language.
         *
         * See: https://github.com/wbuchwalter/tslint-loader
         */
        tslint: {
          emitErrors: false,
          failOnHint: false,
          resourcePath: 'src'
        },
      }
    }),
  ],
  // we need this due to problems with es6-shim
  node: {
    global: true,
    progress: true,
    crypto: 'empty',
    module: true,
    clearImmediate: false,
    setImmediate: false
  }
};

/**
 * Target Electron
 */
config.target = 'electron-renderer';
module.exports = config;
<<<<<<< HEAD
// module.exports = {
// entry: path.resolve('./index.js'),
// target: 'node', // in order to ignore built-in modules like path, fs, etc. 
// externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
// output: {
    // filename: 'bundle.js',
// }

// };
=======
>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4
