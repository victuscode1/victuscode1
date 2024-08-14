const { CatchAsync } = require("../errorHandling/utils");
const express = require('express');
const { getHotels, getHotelById } = require('../controllers/hotelController.js');

const router = express.Router();

router.get('/', getHotels);
router.get('/:id', getHotelById);

module.exports = router;
