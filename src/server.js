const express = require('express');
require('./database');
const Job = require('./app/models/Job');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/jobs', require('./routes/jobs.routes'));

app.listen(3333, () => console.log('Server running on port 3333...'));