const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500 //Si existe un statusCode se asigna, si no existe se pone code 500

  res.status(statusCode)

  res.json({ //Devuelve en formato de JSON el error
    message: err.message,  //Indica cual es el error
    stack: process.env.NODE_ENV === 'production' ? null : err.stack //NODE_ENV = variable de entorno - Stack, mensaje técnico del error 
  }) // Si está en modo producción no se muestra nada. Si está en modo desarrollo se muestra el error 
}

module.exports = {
  errorHandler
}