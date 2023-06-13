const User = require('../models/user');

const authMiddleware = (req, res, next) => {
    if (req.session && req.session.userId) {
        User.findById(req.session.userId)
            .then(user => {
                if (!user) {
                    return res.status(401).json({ success: false, error: 'Unauthorized' });
                }
                req.user = user;
                next();
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ success: false, error: 'Failed to retrieve user' });
            });
    } else {
        // User is not logged in
        // You can handle unauthorized requests here
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }
};

module.exports = authMiddleware;

