const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader", // inject CSS to page
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run postcss actions
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.js$/, //Va a buscar todos los archivos JS en mi proyecto
        exclude: /node_modules/, //Omite la carpeta node_modules
        use: {
          loader: "babel-loader", //carga babel
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //Que archivo HTML va a ser el base de mi proyecto en la carpeta src
      filename: "./index.html", // Que único archivo de HTML se va a generar en la carpeta dist
      //El archivo de conf. de webpack simula que se trabaja desde la carpeta dist, por lo que no se necesita especificar.
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", //Webpack se encargará de generar un nombre del archivo de CSS por nosotros.
      chunkFilename: "[id].css", //Separa el CSS en pedacitos para que dependiendo de la vista solo cargue el CSS necesario. Solo se ejecuta en el caso si hay mucho CSS o es muy grande.
    }),
  ],
};