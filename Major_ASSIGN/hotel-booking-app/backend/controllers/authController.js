const { CatchAsync } = require("../errorHandling/utils");
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

// Register new user
exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role, // 'user', 'admin', or 'owner'
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            data: {
                user: newUser,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};
// User login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' } // Token valid for 1 day
        );

        res.status(200).json({
            status: 'success',
            message: 'Logged in successfully',
            token,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};
// Protect routes
exports.protect = async (req, res, next) => {
    try {
        // Check if token is provided
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: 'You are not logged in' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user still exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser) {
            return res.status(401).json({ message: 'User no longer exists' });
        }

        // Grant access to the protected route
        req.user = currentUser;
        next();
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'Unauthorized access',
        });
    }
};
