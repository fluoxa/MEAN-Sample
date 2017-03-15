const mongodbSetup = require('./appStart/mongodbSetup');
mongodbSetup.setupMongoose();

const expressSetup = require('./appStart/expressSetup');
let app = expressSetup.getInitializedApp();

const http = require('http');
const server = http.createServer(app);
const port = 3000;

server.listen(port, () => console.log(`API running on localhost:${port}`));
