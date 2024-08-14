const { CatchAsync } = require("../errorHandling/utils");
const Hotel = require('../models/Hotel.js');

// Get all hotels based on filters

exports.getHotels = async (req, res) => {
    try {
        const { destination, checkInDate, checkOutDate, guests, rooms } = req.query;

        // Build the query object based on the provided filters
        const query = {};

        if (destination) {
            query.destination = { $regex: destination, $options: 'i' };
        }

        if (checkInDate && checkOutDate) {
            query['rooms.unavailableDates'] = {
                $not: {
                    $elemMatch: {
                        $gte: new Date(checkInDate),
                        $lt: new Date(checkOutDate)
                    }
                }
            };
        }

        if (guests && rooms) {
            query['rooms.maxPeople'] = { $gte: guests };
            query['rooms.numberOfRooms'] = { $gte: rooms };
        }

        // Fetch hotels based on the query
        const hotels = await Hotel.find(query);

        res.status(200).json({
            status: 'success',
            results: hotels.length,
            data: {
                hotels
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch hotels'
        });
    }
};

// Get a single hotel by ID
exports.getHotelById = async (req, res) => {
    // Fetch single hotel by ID logic
    try {
        const hotelId = req.params.id;

        // Fetch the hotel by ID from the database
        const hotel = await Hotel.findById(hotelId);

        if (!hotel) {
            return res.status(404).json({
                status: 'fail',
                message: 'Hotel not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                hotel
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch hotel'
        });
    }
};
