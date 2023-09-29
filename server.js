const express = require('express');
const bodyParser = require('body-parser'); 
const clientRoutes = require('./src/routes/clientRoutes');
const database = require('./src/config/database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 
app.use('/clients', clientRoutes); 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`); 
});
