const express = require('express');
const path = require('path');

const app = express();
app.use(express.json()); // Parse JSON bodies

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/echo', (req, res) => {
    res.send("This path is for Post requests")
});

// Route for handling POST requests
app.post('/echo', (req, res) => {
    // Extract the age from the request body
    const age = req.body.age;

    // Check if age is provided and it's a number
    if (age !== undefined && typeof age === 'number') {
        // Multiply the age by 2 and send it back in the response
        const doubledAge = age * 2;
        res.json({ doubledAge });
    } else {
        // If age is not provided or not a number, send an error response
        res.status(400).json({ error: 'Invalid age provided' });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
