const { CatchAsync } = require("../errorHandling/utils");
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
