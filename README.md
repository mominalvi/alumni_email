# JavaScript Email Sender

A simple Node.js application for sending bulk emails to alumni for events and notifications.

## Description

This application allows the user to send emails in bulk, was specifically made for alumni events and updates. It utilizes Node.js and Nodemailer for handling email operations.

## Tech Stack

- Node.js
- Nodemailer
- JavaScript
- HTML (for email templates)

## Challenges

- Configuring Nodemailer with Gmail for bulk email sending.
- Handling environmental variables securely with dotenv.
- Reading HTML content for emails from external files.

## Requirements

- Install Node.js from [Node.js Official Site](https://nodejs.org/).
- Install required npm packages by running the following command in your project directory:
  ```bash
  $ npm install

## How to Run

(Note: Make sure you have set up your `.env` file with your email and password before running the application.)

1. Navigate to the project directory:
   ```bash
   $ cd js_email

2. Run the script:
   ```bash
   $ node sendEmail.js

## Additional Notes
- Do not push your `.env` file to public repositories as it contains sensitive information like your email and password.
- Monitor the application for any errors during the email sending process and log these for review.



