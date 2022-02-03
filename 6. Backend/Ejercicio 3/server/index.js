require('dotenv').config()

const express = require('express');
const {Pool, Client} = require ('pg'); // La función pool se conecta a la base de datos
//const sql = require('sql');
const formatNumber = require('format-number');

//console.log('Variables de entorno');
//console.log(process.env); //Accesa a las variables de entorno 

const app = express();
//sql.setDialect('postgres');

const client = new Client({  // en esta sección se conecta la base de datos al cliente, se están jalando las variables de entorno desde .env
  user: process.env.PG_USUARIO,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
})

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
});

const port = 3000;

/* const gastos = sql.define({
  name: 'gastos',
  columns: ['id', 'createdAt', 'amount']
}) */

app.get('/', (req, res) => {
  res.send('Ahora estas en /');
});

app.get('/saludo', (req, res) => {
  res.send('Hola Mundo!');
});

app.get('/registra-gasto/:valor', (req, res) => {
  const params = req.params;
  const amount = params.valor;
  
  // guardar el dato que mandamos en la base de datos;
  const query = {
    text: 'INSERT INTO gastos (amount) VALUES ($1)',
    values: [amount],
  }
  
  client.query(query, (err, respuesta) => {
    if (err) {
      console.log(err.stack)
      return res.send('Hubo un error :(');
    } else {
      console.log(respuesta.rows[0])
      return res.send('Acabo de registrar tu gasto por ' + formatNumber({prefix: '$'})(amount) + ' !');
    }
  })
});

app.listen(port, () => {
  console.log("Este servidor esta vivito y coleando!! 🚀🚀🚀");
});