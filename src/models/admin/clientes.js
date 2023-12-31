const Sequelize = require('sequelize');
const sequelize = require('../core');

const Cliente = sequelize.define('cliente', {
  nome: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Cliente.sync();

module.exports = Cliente;
