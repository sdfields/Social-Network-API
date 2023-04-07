// Imports / Requirements

const moment = require("moment");
const { Schema, Types } = require("mongoose");

// Reaction

const reactionSchema = new Schema(
 {
  // ID
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  // Body
  reactionBody: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280,
  },
  // Username
  username: {
    Type: String,
    required: true,
  },
  // Created at
  createdAt: {
    type: Date,
    default: Date.now,
    get: (dateStamp) => moment(dateStamp).format("MMM DD, YYYY [at] hh:mm a"),
  },
 },
);

// Exports

module.exports = reactionSchema;
