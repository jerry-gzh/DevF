const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Por favor escribe un texto']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Tarea', tareaSchema)