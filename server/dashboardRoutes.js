const express = require('express');
const router = express.Router();
const Character = require('../models/characters');

// GET /dashboard
router.get('/', async (req, res) => {
    try {
        // Fetch data from the database or perform calculations
        const characters = await Character.find(); // Example: Fetch all characters

        // Render the dashboard page with the data
        res.render('dashboard', { characters });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

