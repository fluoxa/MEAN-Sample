const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

/** Setup express. **/
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// set api routes
const forum = require('./server/rest-services/forum/forum');
app.use('/api/forum', forum);
const thread = require('./server/rest-services/forum/thread');
app.use('/api/forum/thread', thread);
const post = require('./server/rest-services/forum/post');
app.use('/api/forum/thread/post', post);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/** Create HTTP server. **/
const server = http.createServer(app);
const port = 3000;

server.listen(port, () => console.log(`API running on localhost:${port}`));
