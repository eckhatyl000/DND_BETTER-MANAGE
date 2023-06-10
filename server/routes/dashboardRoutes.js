const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// GET /dashboard
router.get('/', dashboardController.dashboard);
router.get('/', (req, res) => {
    res.send('dashboard page')
});

module.exports = router;

