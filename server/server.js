const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes
const loginRoutes = require('./routes/loginRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes');
const otherRoutes = require('./routes/otherRoutes');
const createAccountRoutes = require('./routes/createAccountRoutes');

app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/auth', authRoutes);
app.use('/other', otherRoutes);
app.use('/create-account', createAccountRoutes);

// Create a route for creating a new character
app.post('/api/characters', (req, res) => {
    // Logic to create a new character
    const newCharacter = req.body;
    // Save the new character to the database
    // ...
    // Send a response indicating success or failure
    res.json({ message: 'Character created successfully' });
});

// Create a route for retrieving character details
app.get('/api/characters/:id', (req, res) => {
    // Logic to retrieve character details
    const characterId = req.params.id;
    // Retrieve character details from the database
    // ...
    // Send the character details in the response
    res.json({ character: { id: characterId, name: 'John Doe', class: 'Warrior' } });
});

// Create a route for updating character information
app.put('/api/characters/:id', (req, res) => {
    // Logic to update character information
    const characterId = req.params.id;
    const updatedData = req.body;
    // Update the character in the database
    // ...
    // Send a response indicating success or failure
    res.json({ message: 'Character updated successfully' });
});

// Create a route for deleting a character
app.delete('/api/characters/:id', (req, res) => {
    // Logic to delete a character
    const characterId = req.params.id;
    // Delete the character from the database
    // ...
    // Send a response indicating success or failure
    res.json({ message: 'Character deleted successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // Update with your MongoDB connection URL

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB cluster
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');

        // Connection successful, perform database operations
        const db = client.db('your-database-name'); // Update with your database name

        // Example: Insert a document into a collection
        const collection = db.collection('your-collection-name'); // Update with your collection name
        collection.insertOne({ name: 'John Doe', age: 30 }, (err, result) => {
            if (err) {
                console.error('Error inserting document:', err);
                return;
            }

            console.log('Document inserted:', result.insertedCount);
            client.close();
        });
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();

