const path = require("path");

module.exports = {
  entry:  ['./client/app.jsx'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s?[ac]ss/i,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer : {
      publicPath : "/dist",
      proxy: {
        "/" : "http://localhost:3000/"
      }
  }
};
