const { CatchAsync } = require("../errorHandling/utils");
const Booking = require('../models/Booking.js');

// Create new booking
exports.createBooking = async (req, res) => {
    try {
        const { userId, hotelId, roomId, checkInDate, checkOutDate, totalPrice } = req.body;

        // Create a new booking document
        const newBooking = new Booking({
            userId,
            hotelId,
            roomId,
            checkInDate,
            checkOutDate,
            totalPrice
        });

        // Save the new booking to the database
        const savedBooking = await newBooking.save();

        res.status(201).json({
            status: 'success',
            data: {
                booking: savedBooking
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to create booking'
        });
    }
};
