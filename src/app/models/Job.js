const Sequelize = require('sequelize');
const { Model } = require('sequelize');
class Job extends Model {
    static init(sequelize){
        super.init({
            title: Sequelize.STRING,
            techs: Sequelize.STRING,
            description: Sequelize.STRING,
            budget: Sequelize.STRING,
            contact_email: Sequelize.STRING
        }, {sequelize})
    }
}

module.exports = Job;