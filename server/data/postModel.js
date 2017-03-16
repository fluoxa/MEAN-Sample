const autoIncrement = require('mongoose-auto-increment');
let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  threadId: {type: Number, required : true},
  userId: {type: Number, required : true},
  title: String,
  content: String,
  publishingDate: Date
});

postSchema.plugin(autoIncrement.plugin, 'Post');
module.exports = mongoose.connection.model('Post', postSchema);
