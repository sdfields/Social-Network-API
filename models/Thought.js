// Imports / Requirements

const { Schema, model } = require("mongoose");
const moment = require('moment');

// Thought

const thoughtSchema = new Schema({
  // Text
  thoughtText: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280,
  },
  // Created at
  createdAt: {
    type: Date,
    default: Date.now,
    get: dateStamp => moment(dateStamp).format('MM DD, YYYY [at] hh:mm a'),
  },
  // Username
  username: {
    type: String,
    required: true,
  },
  // Reactions
});
