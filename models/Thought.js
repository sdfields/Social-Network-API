// Imports / Requirements

const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./Reaction");

// Thought

const thoughtSchema = new Schema(
  {
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
      get: (dateStamp) => moment(dateStamp).format("MMM DD, YYYY [at] hh:mm a"),
    },
    // Username
    username: {
      type: String,
      required: true,
    },
    // Reactions
    reactions: 
    [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual for Reaction Count

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Exports

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;