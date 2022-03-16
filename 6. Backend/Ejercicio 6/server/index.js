const path = require('path');
const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send ('Estamos en la ruta raíz');
});

//Logger
app.use((req, res, next) =>{
  console.log(`${req.method}${req.url}`);
  next();
});


app.listen(3000, () => {
  console.log('Se inicio servidor');
})