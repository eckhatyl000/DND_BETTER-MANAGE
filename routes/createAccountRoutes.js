const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// POST /create-account
router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate username and password
        const isValid = await isValidCredentials(username, password);
        if (!isValid) {
            return res.status(401).json({ message: 'You done messed up A A RON that was invalid' });
        }

        // Encrypt the password
        const hashedPassword = await hashPassword(password);

        

        
        res.json({ message: 'You done diddly created your account congrats' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Error creating account' });
    }
});

// Function to validate username and password
async function isValidCredentials(username, password) {
    // Check if the username exists in the database
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
        return false; // Username does not exist
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
        return false; // Password does not match
    }

    return true; // Username and password are valid
}

// Function to hash the password
async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

module.exports = router;


