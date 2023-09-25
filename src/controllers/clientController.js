const Client = require('../models(client');

//Obtener todos los clientes
exports.getAllClients = async (req, res)=>{
try{
    const Client = await Client.find();
    res.json(clients);
}catch(error){
res.status(500).json({error: 'Error al obtener los Clientes'});
}
};

//Obtener un cliente por su ID
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
//Crear un nuevo cliente
exports.createClient = async (req, res)=>{
    try {
        const newClient = new Client(req, res);
        const saveClient = await newClient.save();
        res.status(201).json(saveClient);
    } catch (error) {
        res.status(500),json({error: 'Error al crear el cliente'})
    }
};
//Actualizar un cliente existente 
exports.updateClient = async(req, res)=>{
    try {
       const updateClient=await Client.findByIdAnUpdate(req.params.id, req.body,{
        new: true,
       });
       if(!updateClient){
        return res.status(404).json({error:'Cliente no encontrado'});
       }
       res.json(updateClient);
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar el cliente'})
    }
};

//Eliminar un cliente existente
exports.deleteClient = async(req, res)=>{
    try {
        const deleteClient = await Client.findByIdAndRemove(req.params.id);
        if(!deleteClient){
            return res.status(404).json({error: 'Cliente noo encontrado'});            
        }
        res.json({message: 'Cliente eliminado correctamente'});
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar el cliente'});
    }
};