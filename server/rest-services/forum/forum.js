const express = require('express');
const router = express.Router();

router.get('/count', (req, res) => {

  //todo: returns number of threads in forum
  res.status(200).json({"count" : 1});
});

module.exports = router;
