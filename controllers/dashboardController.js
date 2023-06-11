const User = require('../models/user');
const Character = require('../models/characters');

exports.dashboard = async (req, res) => {
    try {
        // Retrieve user data from the session
        const userId = req.session.userId;

        // Retrieve user details from the database
        const user = await User.findById(userId);

        // If the user does not exist, return an error response
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Retrieve character details for the user from the database
        const characters = await Character.find({ userId });

        // Render the dashboard view with the retrieved data
        res.render('dashboard', { user, characters });
    } catch (error) {
        // Handle any errors that occur during data retrieval or rendering
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


