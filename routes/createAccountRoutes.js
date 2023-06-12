const express = require('express');
const path = require('path');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Login', 'create-account', 'create-account.html'));
});

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username is already in use
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username is already taken' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create the new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.json({ message: 'You done diddly created your account congrats' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Error creating account' });
    }
});


async function isValidCredentials(username, password) {
    
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
        return false; 
    }

    
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
        return false; 
    }

    return true; 
}


async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

module.exports = router;


