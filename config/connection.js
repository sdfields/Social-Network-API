// Imports / Requirements

const { connect, connection } = require('mongoose');

// Database Connection

connect('mongodb://127.0.0.1/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Exports

module.exports = connection;