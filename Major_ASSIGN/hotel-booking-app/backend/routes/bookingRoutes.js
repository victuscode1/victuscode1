const { CatchAsync } = require("../errorHandling/utils");
const express = require('express');
const { createBooking } = require('../controllers/bookingController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', protect, createBooking);

module.exports = router;
