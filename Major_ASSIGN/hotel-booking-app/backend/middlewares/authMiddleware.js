const { CatchAsync } = require("../errorHandling/utils");
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

exports.protect = async (req, res, next) => {
    // JWT protection logic
    try {
        let token;

        // Check if the request has an authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Extract the token from the authorization header
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                status: 'fail',
                message: 'You are not logged in! Please log in to get access.'
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user still exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser) {
            return res.status(401).json({
                status: 'fail',
                message: 'The user belonging to this token does no longer exist.'
            });
        }

        // Grant access to protected route
        req.user = currentUser;
        next();
    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: 'Invalid token. Please log in again!'
        });
    }
};

exports.adminOnly = async (req, res, next) => {
    // Admin only access logic
    try {
        // Assuming the user information is stored in req.user after JWT verification
        const user = await User.findById(req.user.id);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({
                status: 'fail',
                message: 'You do not have permission to perform this action'
            });
        }

        next();
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to check user role'
        });
    }
};
