const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    
    res.redirect('/dashboard');
});

module.exports = router;




