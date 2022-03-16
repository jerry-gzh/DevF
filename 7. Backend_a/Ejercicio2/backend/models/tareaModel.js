const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Por favor escribe un texto']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Tarea', tareaSchema)