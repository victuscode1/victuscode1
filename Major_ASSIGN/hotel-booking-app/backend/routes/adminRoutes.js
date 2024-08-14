const express = require('express');
const { addHotel, deleteUser } = require('../controllers/adminController.js');
const { protect, adminOnly } = require('../middlewares/authMiddleware.js');
const { CatchAsync } = require("../errorHandling/utils");

const router = express.Router();

router.post('/addHotel', protect, adminOnly, addHotel);
// router.delete('/deleteUser/:id', protect, adminOnly, deleteUser);

module.exports = router;
