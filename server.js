const express = require('express');
const bodyParse = require('body-parser');
const clientRoutes = require('./src/routes/clientRoutes');
const database = require('./src/config/database');

const app = express();
const PORT =3000;

app.use(bodyParse.json());

app.use('.clients', clientRoutes);

app.listen(PORT, ()=>{
    console.log('servidor escuchando en el puerto ${PORT}');
});