require("dotenv").config();
console.log(process.env);

const express = require("express");
const { Pool, Client } = require("pg");
const moment = require("moment");
moment.locale("es-mx");

// const sql = require('sql');
const formatNumber = require("format-number");

// console.log('VARIABlES DE ENTORNO');
// console.log(process.env);

const app = express();
// sql.setDialect('postgres');

const client = new Client({
  user: process.env.PG_USUARIO,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

client.connect();

client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
});

const port = 3000;

// const gastos = sql.define({
//   name: 'gastos',
//   columns: ['id', 'createdAt', 'amount']
// })

app.get("/", (req, res) => {
  res.send("Ahora estas en /");
});

app.get("/saludo", (req, res) => {
  res.send("Hola Mundo!");
});

app.get("/registra-gasto/:valor", (req, res) => {
  const params = req.params;
  const amount = params.valor;

  // guardar el dato que mandamos en la base de datos;
  const query = {
    text: "INSERT INTO gastos (amount) VALUES ($1)",
    values: [amount],
  };

  client.query(query, (err, respuesta) => {
    if (err) {
      console.log(err.stack);
      return res.send("Hubo un erro :(");
    } else {
      console.log(respuesta.rows[0]);
      return res.send(
        "Acabo de registrar tu gasto por " +
          formatNumber({ prefix: "$" })(amount) +
          " 👌😁"
      );
    }
  });
});

app.get("/lista", (req, res) => {
  // consultar la base de datos y obtener los gastos
  client.query('SELECT * FROM "gastos";', (err, postgresRes) => {
    if (err) {
      // constestar que hubo error
      console.log(err);
    } else {
      // le da formato en string a los gastos
      const gastos = postgresRes.rows;
      const formattedArray = gastos.map((gasto) => {
        const parsedDate = moment(gasto.created_at).format("LLL");
        return `<p id="${gasto.id}">${parsedDate} -- $${gasto.amount}</p>`;
      });
      console.log(formattedArray);
      const formattedString = formattedArray.join("");

      // mandar la lista de gastos
      return res.status(200).send(formattedString);
    }
    res.status(403).send("Estamos trabando para poner en linea esto :("); // temporal
  });
});

app.get("/borrar/:id", (req, res) => {
  // Ingresar el id del dato a eliminar 🚀🚀🚀
  const params = req.params;
  const id = params.id;

  // guardar el dato que mandamos en la base de datos;
  const query = {
    text: "DELETE FROM gastos WHERE gastos.id =($1)",
    values: [id],
  };

  client.query(query, (err, respuesta) => {
    if (err) {
      console.log(err.stack);
      return res.send("Hubo un error:(");
    } else {
      console.log(respuesta.rows[0]);
      return res.send("Acabo de borrar tu gasto " + id);
    }
  });
});


app.get("/modificar/:nValor/:id", (req, res) => {
  // Ingresar el id del dato a modificar 🚀🚀🚀
  const params = req.params;
  const nValor = params.nValor;
  const id = params.id;
  
  // guardar el dato que mandamos en la base de datos;
  const query = {
    text: "UPDATE gastos SET amount = ($1) WHERE id = ($2)",
    values: [nValor, id],
  };

  client.query(query, (err, respuesta) => {
    if (err) {
      console.log(err.stack);
      return res.send("Hubo un error:(");
    } else {
      console.log(respuesta.rows[0]);
      return res.send(`Acabo de actualizar tu gasto ${id} por el nuevo monto de $ ${nValor}`);
    }
  });
});


app.listen(port, () => {
  console.log("Este servidor esta vivito y coleando!! 🚀");
});
