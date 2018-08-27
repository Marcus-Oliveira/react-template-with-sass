var webpack = require('webpack');
var path = require('path');

var nodeEnv = process.env.NODE_ENV || 'development';
var isProd = false;

module.exports = {
  //devtool: isProd ? 'cheap-module-source-map' : 'eval',
  mode: process.env.NODE_ENV || 'development',
  context: path.join(__dirname, './src'),
  entry: "./main.js",
  output: {
    path: __dirname + "/public/js/",
    publicPath: "/js/",
    filename: 'app.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
  ],
  optimization: {
    minimize: false
  }
};
