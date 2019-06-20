const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const {UnusedFilesWebpackPlugin} = require('unused-files-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = function(name, overridesConfig) {
  if (typeof name !== 'string') {
    throw new Error('shared-webpack-config expects a string name as the first argument')
  }

  if (typeof overridesConfig !== 'object' && typeof overridesConfig !== 'function') {
    throw new Error('shared-webpack-config expects an object as a second argument to override the canopy defaults. Received ' + typeof overridesConfig)
  }

  return function(env = {}) {
    const sharedDefaultConfig = {
      entry: path.resolve(__dirname, `./src/index.js`),
      output: {
        filename: `${name}.js`,
        libraryTarget: 'system',
        path: path.resolve(process.cwd(), 'build'),
        chunkFilename: '[name].js',
      },
      mode: env.production ? 'production' : 'development',
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
          {
            test: /\.js?$/,
            exclude: [path.resolve(process.cwd(), 'node_modules')],
            loader: 'babel-loader',
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),     
              plugins: [
                // https://github.com/babel/babel-loader#babel-is-injecting-helpers-into-each-file-and-bloating-my-code
                "@babel/plugin-transform-runtime"
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              cacheCompression: !env.dev,
              compact: !env.dev,
            },
            
          },
          // https://github.com/systemjs/systemjs#compatibility-with-webpack
          {
            parser: {
              system: false,
            },
          },
        ],
      },
      resolve: {
        modules: [
          process.cwd(),
          'node_modules',
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
          analyzerMode: env.analyze || 'disabled',
        }),
        new UnusedFilesWebpackPlugin({
          globOptions: {
            cwd: path.resolve(process.cwd(), 'src'),
            ignore: [
              "**/*.test.js",
              "**/*.spec.js",
              "**/*.js.snap",
              "**/test-setup.js",
            ],
          }
        }),
      ],
      devtool: env.production ? 'source-maps' : 'eval',
      externals: [
        /^lodash$/,
        /^react$/,
        /^react\/lib.*/,
        /^react-dom$/,
        /.*react-dom.*/,
        /^single-spa$/,
        /^prop-types$/,
      ],
    };

    const devConfig = env.production ? {} : {
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ],
      devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    }
    
    const finalConfig = merge.smart([sharedDefaultConfig, devConfig, overridesConfig])

    if (true || env.debug) {
      console.log(finalConfig)
    }

    return finalConfig
  }
}