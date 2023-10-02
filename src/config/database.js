const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/practica4', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,

})
.then(() => console.log('Conexion exitosa a MongoDB'))
.catch(err=>console.error('Error de conexion a MongoDB',err));