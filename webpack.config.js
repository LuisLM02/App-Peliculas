const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForTypeScript = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
}
const rulesForSASS = {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    }
  ]
}
const rulesForFiles = {
  rules : [
    {
      test:/\.(jpe?g|png|gif|svg|webp|ico)$/i,
      use:["file-loader?name=assets/[name].[ext]"]
    }
  ]
}

const rules = [rulesForTypeScript, rulesForSASS, rulesForFiles];

module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'build')
  },
  plugins:[
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {rules},
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
}