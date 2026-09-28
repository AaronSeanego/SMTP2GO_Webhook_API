const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to automatically parse incoming JSON payloads
app.use(express.json());

// Handling a POST request with a JSON body
app.post('/api/data', (req, res) => {
    // Access the parsed JSON object directly from req.body
    const receivedData = req.body;

    console.log(receivedData);

    // Echo back a response
    res.status(200).json({
        message: "Data received successfully!",
        data: receivedData
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});