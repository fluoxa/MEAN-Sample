const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/all', (req, res) => {

  let threads = [{
    userId: 12,
    title: 'Schmeckt Salat?',
    content: 'Will wissen, ob Grünzeug lecker ist?',
    publishingDate: moment(),
    postIds : [12, 17]
  },
  {
    userId: 12,
    title: 'Wohin mit meinen büchern?',
    content: 'Habe zu viele bücher... verbrennen ist zu schade. was tunẞ',
    publishingDate: moment().add(7, 'days'),
    postIds : [12, 17]
  }];

  //todo: load from db

  res.status(200).json(threads);
});

module.exports = router;
