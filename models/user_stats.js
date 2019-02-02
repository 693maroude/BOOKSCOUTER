let mongoose = require('mongoose');

// Article Schema
let userStatSchema = mongoose.Schema({
  user_id:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  uploader:{
    type: String,
    required: true
  },
  image_url:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  file:{
    data: Buffer,
    Type: String
  }
});

module.exports = mongoose.model('User_Stats',userStatSchema);
