const express = require('express');
const moment = require('moment');
const router = express.Router();

const Post = require('../../data/postModel');

//TODO: think about user permission for deletion of post, etc.,
//TODO: (e.g. by assigning each user a unique api-key on first sign in)

router.get('/:id', (req, res) => {

  //todo: load from db

  let post = {
    id: req.params.id,
    threadId: 3,
    userId: 12,
    title: 'blöder kommentar',
    content: 'spinat schmeckt kacke...',
    publishingDate: moment()
  };

  res.status(200).json(post);
});

router.put('/', (req, res) => {

  let post = new Post({
    threadId: req.body.threadId,
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    publishingDate: req.body.publishingDate
  });

  if(typeof post.error !== 'undefined'){
    res.status(400).send(null);
    return;
  }

  post.save()
    .then(() => res.status(200).send(null))
    .catch(error => {
      console.error('Error while saving postModel: ' + error);
      res.status(400).send(null);
    });
});

router.delete('/:id', (req, res) => {

  //todo: delete from db

  res.status(200).send(null);
});

module.exports = router;
