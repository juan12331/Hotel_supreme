const { Op } = require('sequelize');
const Usuarios = require('../models/usuarios');

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuarios.findOne({ where: { email, senha } })
        if (usuario.email == email && usuario.senha == senha) {
            return res.send({ user: usuario })
        }
        return res.status(404).send('Usuario not found');
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const { nome, email, cpf } = req.query || {};

        if (!nome && !email && !cpf) {
            const usuarios = await Usuarios.findAll();
            return res.send(usuarios)
        }


        const pesquisa = {
            [Op.or]: [
                nome ? { nome: { [Op.like]: `%${nome}%` } } : undefined,
                email ? { email: { [Op.like]: `%${email}%` } } : undefined,
                cpf ? { cpf: { [Op.like]: `%${cpf}%` } } : undefined,
            ].filter(Boolean)
        }

        const usuarios = await Usuarios.findAll({ where: pesquisa, limit: 20 })
        return res.send(usuarios)

    } catch (error) {
        console.error(error)
        return res.status(500).send('Internal Server Error');
    }
}

exports.getUsersByCpf = async (req, res) => {
    try {
        const encontrarUsuario = await Usuarios.findByPk(req.params.cpf);
        if (!encontrarUsuario) {
            return res.status(404).send('Usuario not found');
        }
        return res.send(encontrarUsuario);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
}
