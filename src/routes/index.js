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




const router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.body);

  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  res.send('<h1>hello</h1>');
});

router.post('/api/mail', function(req, res, next) {
  console.log(req.body);

  const {name, phone, message} = req.body;

  const mailOptions = {
    from: 'air.cleaning.profi@gmail.com',
    to: 'v-gurov@yandex.ru',
    subject:` Новое вообщение от ${name}`,
    text: `от: ${name}
          телефон: ${phone}
          сообщение: ${message}
          `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  res.json(mailOptions).end();
});

export default router;
