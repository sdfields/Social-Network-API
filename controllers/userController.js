// Imports / Requirements

const { User } = require('../models');

// Exports for Routes

module.exports = {

// GET all users

getUsers(req, res) {
    User.find({})
    .select("-__v")
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
        res.status(400).json(err);
    })
}

// GET a single user by its id and populated thought and friend data

getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .select("-__v")
    .lean()
    .then( (userData) => 
        !userData
        ? res.status(404).json({ message: 'Could not find a user with that ID.'})
        : res.json( {userData} )
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
};

// POST a new user

createUser(req, res) {
    User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err));
}

// PUT to update user by id

// DELETE to remove user by id


// This route is for the /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

}