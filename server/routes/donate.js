const express = require('express');

const donateController = require('../controllers/donate');

const router = express.Router();

router.route('/')
    .get(donateController)

module.exports = router;