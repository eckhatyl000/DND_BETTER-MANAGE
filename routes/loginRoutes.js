const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'Login', 'login.html'));
});

router.post('/', (req, res) => {
    // TODO: Check the provided username and password here
    res.redirect('/dashboard');
});

module.exports = router;






