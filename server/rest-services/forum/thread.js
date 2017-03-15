const express = require('express');
const moment = require('moment');
const router = express.Router();

const Post = require('../../data/postModel');

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

router.get('/:id/count', (req, res) => {

  //todo: returns number of posts associated to thread
  res.status(200).json({"count" : 3});
});


router.get('/list', (req, res) => {

  let threads = [{
    threadId: 1,
    authorId: 12,
    title: 'Schmeckt Salat?',
    content: 'Will wissen, ob Grünzeug lecker ist?',
    publishingDate: moment(),
  },
    {
      threadId: 2,
      authorId: 12,
      title: 'Wohin mit meinen büchern?',
      content: 'Habe zu viele bücher... verbrennen ist zu schade. was tunẞ',
      publishingDate: moment().add(7, 'days')
    }];

  //todo: load from db

  res.status(200).json(threads);
});


router.put('/:id/post', (req, res) => {

  if(req.get('content-type') !== 'application/json'){
    res.status(400).send(null);
    return;
  }

  let post = new Post({
    threadId: req.params.id,
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    publishingDate: req.body.publishingDate
  });

  post.save()
    .then(() => res.status(200).send(null))
    .catch(error => {
      console.error('Error while saving postModel: ' + error);
      res.status(400).send(null);
    });
});


router.put('/', (req, res) => {

  let newThread = {
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    publishingDate: req.body.publishingDate
  };

  //todo: set threadId by db and create thread

  res.status(200).send(null);
});

module.exports = router;
