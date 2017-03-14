const http = require('http');
const expressSetup = require('./appStart/expressSetup');
const mongodbSetup = require('./appStart/mongodbSetup');

/** Setup Mongoose. **/
//mongodbSetup.setupMongoose();

/** Setup Express. **/
let app = expressSetup.getInitializedApp();

/** Create HTTP server. **/
const server = http.createServer(app);
let port = 3000;

server.listen(port, () => console.log(`API running on localhost:${port}`));
