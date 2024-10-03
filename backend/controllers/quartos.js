const { Op, where, Model } = require('sequelize');
const quartos = require('../models/quartos');
const imagens = require('../models/imagens');
const Usuarios = require('../models/users');


// exports.getAllQuartos = async (req, res) => {
//     try {

//         const { nome, numero_quarto } = req.query || {};

//         if (!nome && !numero_quarto) {
//             const EmprestimosInformacoes = await Usuarios.findAll({
//                 include: [{
//                     model: Livros, right: true
//                 }]
//             })
//             return res.send(EmprestimosInformacoes)
//         }

//         const pesquisa = {
//             [Op.or]: [
//                 nome ? { nome: { [Op.like]: `%${nome}%` } } : undefined,
//                 cpf ? { cpf: { [Op.like]: `%${cpf}%` } } : undefined,
//             ].filter(Boolean)
//         }

//         const EmprestimosInformacoes = await Usuarios.findAll({
//             where: pesquisa, include: [{
//                 model: Livros, right: true
//             }]
//         })
//         return res.send(EmprestimosInformacoes)

//     } catch (error) {
//         return res.status(500).send(error)
//     }
// }
//
// FIX: arrumar esses bglh de quarto depois :P