const mongoose = require('mongoose');

const inboxSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
  },
});

// Export and use scheme to create model
module.exports = mongoose.model('Inbox', inboxSchema);
