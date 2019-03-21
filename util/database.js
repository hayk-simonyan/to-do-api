const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'todo-app', 
    'root', 
    'hayk', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;