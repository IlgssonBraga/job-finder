const Sequelize = require('sequelize');

const sequelize = new Sequelize('jobs', 'postgres', 'docker', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;