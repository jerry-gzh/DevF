const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT // Se obtiene el puerto de ".env"

const app = express()

app.use('/api/transactions', require ('./routes/transactionsRoutes'))//Redireccionará a la ruta requerida

app.listen(port, () => console.log(`El servidor inició en el puerto ${port} 📡`))

