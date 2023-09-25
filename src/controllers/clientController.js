const Client = require('../models(client');
const Client = require('../models/Client');

exports.getAllClients = async (req, res)=>{
try{
    const Client = await Client.find();
    res.json(clients);
}catch(error){
res.status(500).json({error: 'Error al obtener los Clientes'});
}
};
exports.getAllClientById = async (req, res)=>{
    try{
const client = await Client.findById(req.params.id);
if(!client){
    return res.status(404).json({error: 'Cliente no encontrado'});
}
res.json(client);
    }catch(error){
res.status(500).json({error: 'Error al obtener el cliente'});
    }
};