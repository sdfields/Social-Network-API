// Imports / Requirements

const { model, Schema } = require('mongoose');

// User

const userSchema = new Schema (
    
    {
        // Username
        username: {
            type: String,
            required: true,
            unique: true,
        },
        // Email
        email: {
            type: String,
            required: true,
            unique: true,
        },
        // Thoughts
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        // Friends
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);