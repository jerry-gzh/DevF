const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      {
        test: /\.(sa|sc|c)ss$/, // sass | scss  | css
        use: [
          //El orden SI importa
          "style-loader", //Para estilos en linea
          "css-loader", // Para estilos en archivos CSS
          "sass-loader", // Para estilos en scss (sass)
        ],
      },
      {
        test: /\.js$/, //Va a buscar todos los archivos JS en mi proyecto
        exclude: /node_modules/, //Omite la carpeta node_modules
        use: {
            loader: "babel-loader" //carga babel
        }
    },
    {
      type: "asset/resource", // Usamos assest module, es nuevo de webpack
      test: /\.(png|jpg|svg|gif|jpeg)$/, //tipo de archivo a biscar
      generator: {
        filename: "img/[name][ext]", //como va a generar el nombre de la image
      },
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

       new MiniCssExtractPlugin({
            filename: "[name].css", //Webpack se encargará de generar un nombre del archivo de CSS por nosotros.
            chunkFilename: "[id].css" //Separa el CSS en pedacitos para que dependiendo de la vista solo cargue el CSS necesario. Solo se ejecuta en el caso si hay mucho CSS o es muy grande.
        }),

  ],
};
