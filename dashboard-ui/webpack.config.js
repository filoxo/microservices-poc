/* eslint-env node */
const sharedConfig = require('./shared-webpack.config')
const path = require('path');

module.exports = sharedConfig('dashboard-ui', {
  output: {
    publicPath: 'http://localhost:4444/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules') ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ];
              },
            },
          },
        ],
      },
    ],
  },
});
