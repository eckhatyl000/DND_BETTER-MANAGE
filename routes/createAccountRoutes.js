const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        
        const isValid = await isValidCredentials(username, password);
        if (!isValid) {
            return res.status(401).json({ message: 'You done messed up A A RON that was invalid' });
        }

        
        const hashedPassword = await hashPassword(password);

        

        
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


