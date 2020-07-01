const {Router} = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello');
});

routes.use('/jobs', require('./jobs.routes'));

module.exports = routes;