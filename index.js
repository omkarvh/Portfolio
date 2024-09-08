import express from 'express';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Set up OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URI' // For example, http://localhost:3000/auth/google/callback
);

oauth2Client.setCredentials({
  refresh_token: 'YOUR_REFRESH_TOKEN'
});

// Route to handle form submission
app.post('/send_email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const accessToken = await oauth2Client.getAccessToken();
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        refreshToken: 'YOUR_REFRESH_TOKEN',
        accessToken: accessToken.token
      }
    });

    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',
      subject: 'New form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.send('Thank you for your message!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('There was an error sending the email.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
