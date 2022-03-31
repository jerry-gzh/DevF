// El controlador contiene la funcionalidad de las rutas

const asyncHandler = require ('express-async-handler')
const Transaction = require('../models/transactionModel')

const getTransactions = asyncHandler( async(req, res) =>{

  const transactions = await Transaction.find()// dentro del find se pueden filtrar elementos

  res.status(200).json(transactions)
})


const postTransactions = asyncHandler( async(req, res) =>{

  if(!req.body.concept){ //Validación en caso de que el campo esté vacío
    //res.status(400).json({ message: 'Ingrese una transacción'})

    res.status(400)
    throw new Error('Ingrese una transacción')
  }
  const transactions = await Transaction.create({
    concept: req.body.concept,
    mount: req.body.mount
  })

  res.status(200).json(transactions)
})


const deleteTransactions = asyncHandler( async(req, res) =>{
  res.status(200).json({message: `Eliminar transaccion ${req.params.id}`})
})


module.exports = {
  getTransactions, 
  postTransactions, 
  deleteTransactions
}