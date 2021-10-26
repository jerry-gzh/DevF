const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      //Aqui van los loaders de webpack
      {
        test: /\.html$/, //REGEX -> Busca todos los archivos que terminan en .html
        use: [
          {
            loader: "html-loader", //Traduce HTML para que webpack lo entienda
            options: { minimize: true }, //Minifica los archivos HTML encontrados
          },
        ],
        //test: Significa que tengo que buscar
        //use: de lo que encontre, que Loader voy a aplicar
      },
    ],
  },
  plugins: [
    // Aquí se cargan los Plugins de Webpack
    new HtmlWebpackPlugin({
      template: "./src/index.html", //Que archivo HTML va a ser el base de mi proyecto en la carpeta src
      filename: "./index.html", // Que único archivo de HTML se va a generar en la carpeta dist
      //El archivo de conf. de webpack simula que se trabaja desde la carpeta dist, por lo que no se necesita especificar.
    }),
  ],
};
