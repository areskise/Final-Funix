const express = require('express');

const fundraiserControllers = require('../controllers/fundraiser');

const router = express.Router();

router.route('/')
    .get(fundraiserControllers)

module.exports = router;