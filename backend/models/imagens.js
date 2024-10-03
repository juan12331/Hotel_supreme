const Sequelize = require('sequelize')
const database = require('../config/sequelize')
const { default_type } = require('mime');
const quartos = require('./quartos')

const imagens = database.define('imagens', {

    id_imagem: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    imagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_quarto: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

quartos.hasMany(imagens, {
    foreignKey: 'id_quarto'
})

imagens.belongsTo(quartos, {
    foreignKey: 'id_quarto'
});

module.exports = imagens