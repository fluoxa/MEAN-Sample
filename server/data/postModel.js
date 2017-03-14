let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

let postSchema = new mongoose.Schema({
  _id: {type: ObjectId, auto : true},
  threadId: {type: String, required : true},
  userId: {type: String, required : true},
  title: String,
  content: String,
  publishingDate: Date
});

module.exports = mongoose.model('Post', postSchema);
