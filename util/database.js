const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'to-do',
    'root',
    'todo',
    {dialect: 'mysql', host: 'localhost'};
)

module.exports = sequelize;