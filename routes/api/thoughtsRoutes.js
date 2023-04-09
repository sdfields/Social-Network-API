// Imports / Requirements

const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');
const { create } = require('../../models/Thought');

// Routes for Thoughts
// '/api/thoughts'
router.route('/')
.post(createThought)
.get(getThoughts);

// Routes for Thoughts by ID
// '/api/thoughts/:thoughtId'

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// Routes to add and remove reactions
// '/api/thoughts/:thoughtId/reactions'

router.route('/:thoughtId/reactions')
.post(addReaction)

// Route to remove reaction
// '/api/thoughts/:thoughtId/reactions/reactionId

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

// Exports

module.exports = router;

