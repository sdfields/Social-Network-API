// Imports / Requirements

const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

// Middleware

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;