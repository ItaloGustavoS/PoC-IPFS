const path = require("path");

module.exports = {
  entry: "./front.jsx", // Arquivo de entrada
  output: {
    filename: "bundle.js", // Arquivo de saída
    path: path.resolve(__dirname, "dist"), // Diretório de saída
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Servir arquivos do diretório "dist"
    },
    port: 3000, // Porta para o servidor de desenvolvimento
    open: true, // Abrir automaticamente no navegador
  },
};
