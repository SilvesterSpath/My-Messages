const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    reqired: true,
  },
  id: {
    type: Number,
  },
});

module.exports = mongoose.model('message', MessageSchema);
