exports.login = (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
        // Authentication successful
        // Generate and return a token or session information
        const token = 'your-authentication-token';

        res.json({ success: true, message: 'Login successful', token });
    } else {
        // Authentication failed
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
};
