const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {// Verifica si empieza con 
        try {
            //Obtener el token del header (Bearer token)
            token = req.headers.authorization.split(' ')[1]

            //Verificar la firma 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)


            // Obtener la info del usuario del token
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('Acceso no autorizado')
        }
    } 

    if(!token){
        res.status(401)
        throw new Error ('Acceso no autorizado, sin Token')
    }

})

module.exports = {
    protect, 
}