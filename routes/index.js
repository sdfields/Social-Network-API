// Imports / Requirements

const router = require('express').Router();
const apiRoutes = require('./api');

// Middleware

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Unable to reach route!'));

module.exports = router;