import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname)));

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'omkarhiremath74@gmail.com',
        pass: 'hiremath8050'
    }
});

app.post('/send_email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'omkarhiremath74@gmail.com',
        subject: 'New form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('There was an error sending the email.');
        }
        console.log('Email sent:', info.response);
        res.send('Thank you for your message!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
