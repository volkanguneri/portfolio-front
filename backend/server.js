require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

// Create an instance of Express
const app = express();

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Set up middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Set up email data
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com',
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
