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
        res.redirect('/dashboard');
    } else {
        res.redirect('/login'); // Redirect back to the login page if credentials are invalid
    }
});

module.exports = router;






