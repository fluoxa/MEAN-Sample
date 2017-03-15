/** Setup Mongoose. **/
const mongodbSetup = require('./appStart/mongodbSetup');
mongodbSetup.setupMongoose();

/** Setup Express. **/
const expressSetup = require('./appStart/expressSetup');
let app = expressSetup.getInitializedApp();

/** Create HTTP server. **/
const http = require('http');
const server = http.createServer(app);
const port = 3000;

server.listen(port, () => console.log(`API running on localhost:${port}`));
