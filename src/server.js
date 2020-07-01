require('dotenv').config();
const express = require('express');
require('./database');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(require('./routes/index.routes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));