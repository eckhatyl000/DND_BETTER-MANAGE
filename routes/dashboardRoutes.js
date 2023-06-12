const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// GET /dashboard
router.get('/', dashboardController.dashboard);

module.exports = router;


