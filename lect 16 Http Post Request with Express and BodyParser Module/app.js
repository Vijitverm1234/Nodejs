const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const joi = require('joi'); // Joi for validation

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML file for GET requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Handle form submission on POST requests
app.post('/', (req, res) => {
    console.log(req.body);

    // Create schema for checking the inputs
    const schema = joi.object({
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).max(10).required()
    });

    // Validate the request body
    const { error, value } = schema.validate(req.body);

    if (error) {
res.send(error)    }

    // Send success response if validation passes
    res.send("Successfully data sent");
});

// Listen on port 5500
app.listen(5500, () => {
    console.log('Server is running on port 5500');
});
