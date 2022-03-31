const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT // Se obtiene el puerto de ".env"
const { errorHandler } = require ('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json()) //Middleware que da acceso a la aplicación a los métodos de express 
app.use(express.urlencoded({extended:false})) //Middleware que habilita el uso de "urlencoded" de postman - extended:true = qs library -extended:false querystring library 


app.use('/api/transactions', require ('./routes/transactionsRoutes'))//Redireccionará a la ruta requerida

app.use(errorHandler)//Como se sobreescribe un error que está en una ruta, deberá ir después de la ruta

app.listen(port, () => console.log(`El servidor inició en el puerto ${port} 📡`))

