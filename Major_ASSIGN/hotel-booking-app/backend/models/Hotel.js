const { CatchAsync } = require("../errorHandling/utils");
const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    distance: { type: String, required: true },
    photos: { type: [String] },
    description: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
}, { timestamps: true });

module.exports = mongoose.model('Hotel', HotelSchema);
