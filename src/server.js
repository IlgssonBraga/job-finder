const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');

const app = express();


app.get('/', (req, res) => {
    
    res.send('Hello')
});

app.use('/gigs', require('./routes/gigs.routes'));

app.listen(3333, () => console.log('Server running on port 3333...'));