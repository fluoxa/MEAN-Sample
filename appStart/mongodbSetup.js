let appConfig = require('../config/appConfig');
let urlHelper = require('../server/helper/urlHelper');

let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

module.exports = {
  setupMongoose : function() {

    mongoose.Promise = require('bluebird');

    let dbConfig = appConfig.db;
    let connectionString = urlHelper.getUrl('mongodb', dbConfig.host, dbConfig.port, dbConfig.name);

    mongoose.connect(connectionString);

    mongoose.connection.on('connected', () => console.log('Mongoose default connection open to ' + connectionString));
    mongoose.connection.on('error', err => console.log('Mongoose default connection error: ' + err));
    mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

    autoIncrement.initialize(mongoose.connection);

    process.on('SIGINT', () => mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      })
    );
  },

  connection : mongoose.connection
};
