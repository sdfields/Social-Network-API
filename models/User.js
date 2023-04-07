// Imports / Requirements

const { Schema, model } = require('mongoose');

// User

const userSchema = new Schema (
    
    {
        // Username
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        // Email
        email: {
            type: String,
            required: true,
            unique: true,
            // RegEx to Match Email
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address.'],
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

// Virtual for Friend Count

userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

// Exports

const User = model('User', userSchema);
module.exports = User;