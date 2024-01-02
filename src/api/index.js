const express = require('express');

const quotesRouter = require('./api');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/v1', quotesRouter);

module.exports = router;
