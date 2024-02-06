const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/pagecontent.js',
  },  output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devtool: 'inline-source-map',
   plugins: [
    new HtmlWebpackPlugin({
      title: "Jenny's Lunchbox",
    }),
  ],
};