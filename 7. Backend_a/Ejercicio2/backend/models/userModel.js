const mongoose = require ('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: [true, 'Por favor teclea un nombre']
        },
        email: {
            type: 'string',
            required: [true, 'Por favor teclea un email'],
            unique: true
        },
        password: {
            type: 'string',
            required: [true, 'Por favor teclea un password'],
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)