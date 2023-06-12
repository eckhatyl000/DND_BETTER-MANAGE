const fs = require('fs');
const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;


// Middleware for parsing JSON request bodies
app.use(express.json());

app.use(session({
    secret: 'your_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if your using https
}));

app.use(express.static(path.join(__dirname, 'Public')));

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
    db.collection('characters').insertOne(newCharacter)
        .then(result => {
            // Send a response indicating success
            res.json({ message: 'Character created successfully', characterId: result.insertedId });
        })
        .catch(error => {
            console.error('Error:', error);
            // Send a response indicating failure
            res.status(500).json({ message: 'An error occurred while creating the character.' });
        });
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

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Public', 'Login', 'login.html'));
});



app.get('*', function (req, res) {
    res.redirect('/');
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://Eckhatyl000:TeeGee%231@tylerdb.cknlngax0gto.us-west-2.docdb.amazonaws.com:27017/?retryWrites=false';
const ca = fs.readFileSync('/home/ec2-user/us-west-2-bundle.pem');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsInsecure: false,
    tlsCAFile: '/home/ec2-user/us-west-2-bundle.pem',
};

let client;
let db;


// Connect to the Amazon DocumentDB cluster
async function connectToDatabase() {
    try {
        const client = new MongoClient(url, options);
        await client.connect();
        console.log('Connected to the database');

        // Perform database operations
        const db = client.db('tylerdb'); 

        // Check if the collections exist
        const collections = await db.listCollections().toArray();

        // Create the 'users' collection if it doesn't exist
        if (!collections.some(coll => coll.name === 'users')) {
            await db.createCollection('users');
            console.log('Collection "users" created');
        } else {
            console.log('Collection "users" already exists');
        }

        // Create the 'characters' collection if it doesn't exist
        if (!collections.some(coll => coll.name === 'characters')) {
            await db.createCollection('characters');
            console.log('Collection "characters" created');
        } else {
            console.log('Collection "characters" already exists');
        }

        // Check if the 'users' collection has any documents
        const usersCollection = db.collection('users');
        const existingUser = await usersCollection.findOne({});
        if (existingUser) {
            console.log('Document already exists in the "users" collection');
        } else {
            // Insert a document into the 'users' collection
            const result = await usersCollection.insertOne({
                username: 'testuser',
                password: 'testpassword'
            });
            console.log('Inserted document with _id: ' + result.insertedId);
        }

        // Check if the 'characters' collection has any documents
        const charactersCollection = db.collection('characters');
        const existingCharacter = await charactersCollection.findOne({});
        if (existingUser) {
            console.log('Document already exists in the "characters" collection');
        } else {
            // Insert a document into the 'users' collection
            const result = await charactersCollection.insertOne({
                username: 'testCharacter',
                
            });
            console.log('Inserted document with _id: ' + result.insertedId);
        }

    }
    
catch (err) {
    console.error('Error connecting to the database:', err);
    }
}
// Call the connectToDatabase function to establish the connection
connectToDatabase().then(() => {
    db.collection('mycollection').find({});
});


