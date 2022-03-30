// El controlador contiene la funcionalidad de las rutas

const getTransactions = (req, res) =>{
  res.status(200).json({message: 'Obtener transacciones'})
}

const postTransactions = (req, res) =>{
  res.status(200).json({message: 'Crear una transacción'})
}

const deleteTransactions = (req, res) =>{
  res.status(200).json({message: `Eliminar transaccion ${req.params.id}`})
}

module.exports = {
  getTransactions, 
  postTransactions, 
  deleteTransactions
}