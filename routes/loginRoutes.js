const express = require('express');
const path = require('path');
const router = express.Router();

// Middleware for serving static files
router.use(express.static(path.join(__dirname, '../Login')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Login/login.html'));
});

router.post('/', (req, res) => {
    res.redirect('/dashboard');
});

module.exports = router;





