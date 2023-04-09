// Imports / Requirements

const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addToFriends,
    removeFromFriends,
} = require('../../controllers/userController');

// Routes for Users
// '/api/users'

router.route('/')
.post(createUser)
.get(getUsers);

// Routes for users by id
// '/api/users/:userId'

router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// Routes for adding friend by user by ID and friend ID
// '/api/users/:userId/friends/:friendId'

router.route('/:userId/friends/:friendId')
.post(addToFriends);

// Routes for removing friend by user by ID and friend ID
// '/api/users/:userId/friends/:friendId'

router.route('/:userId/friends/:friendId')
.delete(removeFromFriends);

module.exports = router;