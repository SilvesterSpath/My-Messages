const mongoose = require('mongoose');
const uuid = require('uuid');

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    reqired: true,
  },
  id: {
    type: Number,
    reqired: true,
  },
});

module.exports = mongoose.model('message', MessageSchema);
