const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes
const loginRoutes = require('./server/routes/loginRoutes');
const dashboardRoutes = require('./server/routes/dashboardRoutes');
const characterRoutes = require('./routes/characterRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);
app.use('/characters', characterRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

