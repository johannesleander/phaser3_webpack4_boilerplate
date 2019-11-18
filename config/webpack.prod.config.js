const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.ts"
  },

  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "app.bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "../src/"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
    resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization: {
    splitChunks: {
      name: "production-dependencies",
      filename: "production-dependencies.bundle.js"
    }
  },

  devServer: {
    contentBase: path.resolve(__dirname, "../build")
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../index.html"),
        to: path.resolve(__dirname, "../build")
      },
      {
        from: path.resolve(__dirname, "../assets", "**", "*"),
        to: path.resolve(__dirname, "../build")
      }
    ]),
    new webpack.DefinePlugin({
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true)
    })
  ]
};
