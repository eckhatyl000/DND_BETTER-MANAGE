const express = require('express');
const router = express.Router();
const authMiddleware = require('../controllers/authMiddleware');

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
    // Access the authenticated user via req.user
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
