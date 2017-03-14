const express = require('express');
const moment = require('moment');
const router = express.Router();

//TODO: think about user permission for deletion of post, etc.,
//TODO: (e.g. by assigning each user a unique api-key on first sign in)

router.get('/:id', (req, res) => {

  //todo: load from db

  let post = {
    id: req.params.id,
    threadId: 3,
    authorId: 12,
    title: 'blöder kommentar',
    content: 'spinat schmeckt kacke...',
    publishingDate: moment()
  };

  res.status(200).json(post);
});

router.post('/:id', (req, res) => {

  let post = {
    id: req.params.id,
    threadId: req.body.threadId,
    authorId: req.body.authorId,
    title: req.body.title,
    content: req.body.content,
    publishingDate: req.body.publishingDate
  };

  //todo: update in db

  res.status(200).send(null);
});

router.delete('/:id', (req, res) => {

  //todo: delete from db

  res.status(200).send(null);
});

module.exports = router;
