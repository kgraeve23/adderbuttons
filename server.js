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

// Route for handling POST requests
app.post('/echo', (req, res) => {
    // Echo the request body in the response
    
    res.json(req.body);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
