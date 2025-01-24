const path = require("path");

module.exports = {
  mode: "development",
  entry: "./front.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica a regra para arquivos JS e JSX
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Substitui contentBase
    },
    port: 3000,
    open: true,
  },
};
