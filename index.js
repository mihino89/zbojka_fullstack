require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>
                    Meno: ${req.body.name}
                </li>
                <li>
                    Priezvisko: ${req.body.surname}
                </li>
                <li>
                    Telefonne cislo: ${req.body.phone_number}
                </li>
                <li>
                    Email: ${req.body.email}
                </li>
            </ul>
            <br>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: `${req.body.surname} ${req.body.name} ${req.body.email}`, // sender address
            to: 'zbojnickachata.test@gmail.com', // list of receivers
            cc: 'martin.mihalovic98@gmail.com',
            subject: req.body.email, // Subject line
            text: req.body.message, // plain text body
            html: htmlEmail, // html body
            encoding: 'base64',

        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }else{
                console.log("message has been sent")
            }
        });
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

