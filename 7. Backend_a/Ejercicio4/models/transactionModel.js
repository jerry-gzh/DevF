const mongoose = require ('mongoose')

const transactionsSchema  = mongoose.Schema({
  concept: { // campo
    type: String, 
    required: [true, 'Ingresa un concepto']
  },
  mount: {
    type: Number, 
    required: [true, 'Ingresa un monto']
  }
}, {
  timestamps: true, 
})

module.exports = mongoose.model('Transaction', transactionsSchema) // 'Transaccion' es el nombre del modelo asignado a "transactionsSchema"