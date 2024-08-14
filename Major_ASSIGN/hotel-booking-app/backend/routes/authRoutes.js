const { CatchAsync } = require("../errorHandling/utils");
const express = require('express');
const { register, login } = require('../controllers/authController.js');

const router = express.Router();

router.post('/register', register);
router.get('/login', login);

module.exports = router;
