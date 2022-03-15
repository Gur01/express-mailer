import express from 'express';

const router = express.Router();

router.post('/api/mail', function(req, res, next) {
  console.log(req.body);
  res.json('index').end();
});

export default router;
