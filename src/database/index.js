const Sequelize = require('sequelize');
const db = require('../config/database');
const Job = require('../app/models/Job');

const models = [Job];

class Database {
    constructor(){
        this.init();
    }

    init() {
        this.connection = new Sequelize(db);
        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database();