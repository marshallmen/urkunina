const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido al Sistema de Información para la Tienda Local');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
