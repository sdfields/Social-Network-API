// Imports / Requirements

const { Thought, User } = require('../models');

module.exports = {

    // GET All Thoughts 

    getThoughts(req, res) {
        Thought.find()
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(500).json(err));
    },

    // GET Single Thought

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select("-__v")
        .then((thoughtData) => !thoughtData
            ? res.status(404).json({ message: 'No thoughts found with that ID' })
            : res.json(thoughtData)
        )
        .catch((err) => res.status(500).json(err));
    },   

    // POST Thought

    createThought(req, res) {
        Thought.create(req.body)
        .then(({ _id}) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: {thoughts: _id} },
                { new: true },
            )
        }).then(userData => res.json(userData))
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err);
    });
    },

    // PUT Thought by ID

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true},
            { new: true},
        ).then((thoughtData) => !thoughtData
            ? res.status(404).json({ message: 'No thoughts found with that ID' })
            : res.json(thoughtData)
        ).catch((err) => res.status(500).json(err));
    },

    // DELETE Thought by ID

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(500).json(err));
    },

    // POST Reaction in single thought's 'reactions' array

    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body }},
            { runValidators: true },
            { new: true }, 
        ).then((thoughtData) => res.json(thoughtData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        });
    },

    // DELETE to pull and remove reaction by the reactionId

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.params.reactionId }},
            { runValidators: true },
            { new: true },
        ).then((thoughtData) => !thoughtData 
            ? res.status(404).json({ message: 'There was an error when deleting your reaction.'})
            : res.json({ message: 'Reaction successfully deleted!'})
        ).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
    }
};