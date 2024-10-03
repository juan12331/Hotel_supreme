const express = require('express')
const routes = express.Router();
const UsuariosControllers = require('../controllers/users')
const QuartosControllers = require('../controllers/quartos')
const ImagensControllers = require('../controllers/Imagens')

//função dos usuarios
routes.get('/usuarios', UsuariosControllers.getUsers)
routes.get('/usuarios/:cpf', UsuariosControllers.getUsersByCpf)

routes.post('/login', UsuariosControllers.login)


//função dos quartos


//função das imagens

module.exports = routes