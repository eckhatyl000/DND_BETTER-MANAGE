exports.login = (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
        // Authentication successful
        // Generate and return a token or session information
        const token = 'your-authentication-token';

        res.json({ message: 'Login successful', token });
    } else {
        // Authentication failed
        res.status(401).json({ message: 'Invalid username or password' });
    }
};
