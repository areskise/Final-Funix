const express = require('express');

const userControllers = require('../controllers/user')

const router = express.Router();

router.route('/')
    .get(userControllers)

module.exports = router;