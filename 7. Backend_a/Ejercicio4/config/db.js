const mongoose = require ('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)//Llama a la variable de entorno que contiene la ruta de conexión

    console.log(`Conexión a MongoDB exitosa: ${conn.connection.host} 🛰️`)
  } catch (error) {
    console.log(error);
    process.exit(1)//Forza a la detención
  }
}

module.exports = connectDB