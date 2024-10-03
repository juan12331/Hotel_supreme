const Sequelize = require('sequelize')
const database = require('../config/sequelize')
const { default_type } = require('mime');
const users = require('./users')

const quartos = database.define('quartos', {

    id_quarto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    numero_quarto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        unique: true
    },
    preco: {
        type: Sequelize.FLOAT,
        defaultValue: undefined
    },
    imagem: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
});

users.hasMany(quartos, {
    foreignKey: 'cpf'
})

quartos.belongsTo(users, {
    foreignKey: 'cpf'
});

module.exports = livros