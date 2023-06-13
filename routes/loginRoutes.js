const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Public', 'Login', 'login.html'));
});

router.post('/', (req, res) => {
    // TODO: Check the provided username and password here
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {

        const token = 'your-authentication-token';
        res.json({sucess: true, message: 'Login successful', token});
    } else {
        res.status(401).json({ sucess: false, message: 'Invalid username or password'}); // Redirect back to the login page if credentials are invalid
    }

    res.redirect('/dashboard')
});

module.exports = router;






