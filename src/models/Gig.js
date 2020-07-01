const Sequelize, {Model} = require('sequelize');

class Gig extends Model {
}

Gig.init({
    title: {
        type: Sequelize.STRING
    },
    techs: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
});

module.exports = Gig;