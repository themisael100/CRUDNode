const expres = require('express');
const router = expres.Router();
const clienteController = require('../controllers/clientController');

router.get('/', clienteController.getAllClients);
router.get('/:id', clienteController.getAllClientById);
router.post('/', clienteController.createClient);
router.put('/:id', clienteController.updateClient);
router.delete('/:id', clienteController.deleteClient);

module.exports = router;