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

