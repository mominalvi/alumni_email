// Require necessary modules
const fs = require('fs'); // File System for reading files
const nodemailer = require('nodemailer'); // Nodemailer for sending emails

// Read HTML content for the email from a file
const htmlContent = fs.readFileSync('email.html', 'utf8');

// Configure dotenv to load environment variables
require('dotenv').config();

// Retrieve email and password from environment variables
const email = process.env.MY_EMAIL;
const password = process.env.MY_PASSWORD;

// Create a transporter for sending the email using nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Email service provider
    auth: {
      user: email, // Email address for authentication
      pass: password // Password for authentication
    }
});

// List of email recipients
const recipients = ['']; // Add email addresses to this array

// Define the email options
const mailOptions = {
    from: email, // Sender's email address
    bcc: recipients.join(','), // Join all recipients with a comma for BCC
    subject: '', // Subject line of the email
    html: htmlContent // HTML content of the email
};

// Send the email using the transporter
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(`Error sending email: ${error}`); // Log any errors encountered
    } else {
        console.log(`Email sent: ${info.response}`); // Log the success response
    }
});
