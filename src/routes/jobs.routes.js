const express = require('express');
const Jobs = require('../app/models/Job');
const router = express.Router();
const JobsController = require('../app/controllers/JobsController');

router.get('/', JobsController.index);

router.post('/', JobsController.store);

module.exports = router;