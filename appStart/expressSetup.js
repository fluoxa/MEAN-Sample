const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const forum = require('../server/rest-services/forum/forum');
const thread = require('../server/rest-services/forum/thread');
const post = require('../server/rest-services/forum/post');

module.exports = {

  getInitializedApp : function () {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.use(express.static(path.join(__dirname, 'dist')));

    app.use('/api/forum', forum);
    app.use('/api/forum/thread', thread);
    app.use('/api/forum/thread/post', post);

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    return app;
  }
};
