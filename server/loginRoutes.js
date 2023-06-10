const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Import routes
const loginRoutes = require('./routes/loginRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Register routes
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




