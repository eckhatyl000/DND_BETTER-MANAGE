const bcrypt = require('bcrypt');
const User = require('../models/user');


const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ username, password: hashedPassword });

        res.status(201).json({ success: true, user});
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to register user' });
    }
};

// Login a user
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: 'Incorrect password' });
        }

        // Return user data or generate JWT token
        // Here, you can use a JWT library like jsonwebtoken to generate and send a token

        res.json({ success: true, user});
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to login' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
