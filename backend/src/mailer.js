const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Create a transporter for Gmail service (or use Ethereal for testing)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can replace this with other services like Ethereal
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-email-password',  // Or use an App password (for Gmail)
  },
});

// Email sending route
app.post('/send-email', (req, res) => {
  const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'recipient-email@example.com', // Receiver address
    subject: 'Hello from Nodemailer!', // Subject line
    text: 'This is a test email sent from the Node.js app.', // Plain text body
    html: '<b>This is a test email sent from the Node.js app.</b>', // HTML body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: 'Email sent successfully', info: info.response });
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
