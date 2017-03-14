const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/:id', (req, res) => {

  //todo: load from db
  let post1 = {
    id: 17,
    threadId: 3,
    userId: 12,
    title: 'blöder kommentar',
    content: 'spinat schmeckt kacke...',
    publishingDate: moment()
  };

  let post2 = {
    id: 125,
    threadId: 3,
    userId: 2,
    title: 'cleverer kommentar',
    content: 'rucola schmeckt lecker...',
    publishingDate: moment().add(7, 'days')
  };

  let thread = {
    id: req.params.id,
    userId: 12,
    title: 'blöder kommentar',
    content: 'spinat schmeckt kacke...',
    publishingDate: moment(),
    posts : [post1, post2]
  };

  res.status(200).json(thread);
});

router.post('/addto/:id', (req, res) => {

  let newPost = {
    threadId: req.params.id,
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    publishingDate: req.body.publishingDate
  };

  //todo: set id by db and update thread

  res.status(200).send(null);
});

router.put('/', (req, res) => {

  let newThread = {
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    publishingDate: req.body.publishingDate,
    posts : []
  };

  //todo: set threadId by db and create thread

  res.status(200).send(null);
});

module.exports = router;
