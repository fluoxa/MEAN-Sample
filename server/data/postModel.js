let mongoose = require('mongoose');
//let appConfig = require('../../config/appConfig');
//let urlHelper = require('../helper/urlHelper');
//
//let dbConfig = appConfig.db;
//let connectionString = urlHelper.getUrl('mongodb', dbConfig.host, dbConfig.port, dbConfig.name);
//
//mongoose.connect(connectionString);

let postSchema = mongoose.Schema({
  name: String
});
