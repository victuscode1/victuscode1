const { CatchAsync } = require("../errorHandling/utils");
const Hotel = require('../models/Hotel.js');
const User = require('../models/User.js');

// Add new hotel
exports.addHotel = async (req, res) => {
    try {
        const { name, address, city, country, pricePerNight, description, ownerId } = req.body;

        // Check if the user adding the hotel is an admin or the owner
        if (req.user.role !== 'admin' && req.user.role !== 'owner') {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Create a new hotel
        const newHotel = new Hotel({
            name,
            address,
            city,
            country,
            pricePerNight,
            description,
            owner: ownerId || req.user._id, // ownerId from the request or current user
        });

        // Save the hotel to the database
        await newHotel.save();

        res.status(201).json({
            status: 'success',
            message: 'Hotel added successfully',
            data: {
                hotel: newHotel,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

