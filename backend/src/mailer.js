const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public'));

// Simulated database for user events
const userEvents = [
  { id: 1, email: 'user1@example.com', event: 'Weekly Reminder', details: 'Your club meeting is on Friday at 6 PM.' },
  { id: 2, email: 'user2@example.com', event: 'Payment Reminder', details: 'Your club dues are overdue. Please pay by next week.' },
];

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to send email notifications for events
app.post('/send-email', async (req, res) => {
  try {
    // Iterate over user events to send emails
    for (const userEvent of userEvents) {
      const { email, event, details } = userEvent;

      // Send email for each event
      const info = await transporter.sendMail({
        from: `"ClubHub Notifications" <${process.env.EMAIL_USER}>`, // Sender address
        to: email, // Recipient email
        subject: event, // Event title as subject
        text: details, // Plain text body
        html: `<p>${details}</p>`, // HTML body
      });

      console.log(`Email sent to ${email}: %s`, info.messageId);
    }

    res.status(200).send('Emails sent successfully!');
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).send('Failed to send emails.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
