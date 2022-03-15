import express from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'air.cleaning.profi@gmail.com',
    pass: '13420404'
  }
});

const mailOptions = {
  from: 'air.cleaning.profi@gmail.com',
  to: 'v-gurov@yandex.ru',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


const router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.body);
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('<h1>hello</h1>');
});

router.post('/api/mail', function(req, res, next) {
  console.log(req.body);
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.json('index').end();
});

export default router;
