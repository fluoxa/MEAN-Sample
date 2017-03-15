const express = require('express');
const path = require('path');
const http = require('http');

module.exports = {

  getInitializedApp : function () {

    const app = express();
    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.use(express.static(path.join(__dirname, 'dist')));

    this.setupApiRoutes(app);

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    app.get('*', (req, res) => {
      res.status(404).send(null);
    });

    return app;
  },

  setupApiRoutes : function(app) {

    const forum = require('../server/rest-services/forum/forum');
    app.use('/api/forum', forum);

    const thread = require('../server/rest-services/forum/thread');
    app.use('/api/forum/thread', thread);

    const post = require('../server/rest-services/forum/post');
    app.use('/api/forum/thread/post', post);
  }
};
