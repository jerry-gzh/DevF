const path = require('path'); 
const express = require('express');
const app = express();

console.log(__dirname);
console.log(__filename);

// Middleware
app.use((req, res, next) => {
  // console.log(req);
  console.log(`${req.method} ${req.url}`);
  next();
});

const ruta = path.join(__dirname, '../public');
app.use(express.static(ruta))

// app.get('/', (req, res) => {
//   res.send('Estas en / 😊');
// });

app.get('/ayuda', (req, res) => {
  res.send('<h1>Este sitio web es mi sitio web personal 🥰</h1>');
});

app.get('/about', (req, res) => {
  // JSON
  // res.send({
  //   name: 'Misael',
  //   age: 25,
  //   country: 'México',
  //   gustos_musicales: {
  //     grupo_favorito: 'Linkin Park',
  //   }
  // });

  // 
  res.send([
    {
      name: 'Misael',
      age: 25,
      country: 'México',
    },
    {
      name: 'Luis',
      age: 22,
      country: 'Colombia',
    }
  ]);
});

app.listen(3000, () => {
  console.log('El servidor esta prendido en el puerto 3000');
});

// localhost:300

// mipagina.com
// mipagina.com/ayuda - 
// mipagina.com/yo - Nombre en el title y una descripción de ustedes. 
// mipagina.com/yo/proyectos

// HTTP y HTTPS (PROTOCOLOS)
// GET 
// POST

// API (application programming interface)

// RESTful API 
// REST

// CRUD
// Create - POST - mipagina.com/gasto
// Read -   GET  - mipagina.com/gasto/:id
//                 mipagina.com/gastos
// Update - PUT/POST - mipagina.com/gasto/:id
// Delete - DELETE - mipagina.com/gasto/:id/borrar