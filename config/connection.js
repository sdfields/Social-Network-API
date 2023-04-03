// Imports / Requirements

const { connect, connection } = require('mongoose');

// Database Connection

const dbConnection = 
process.env.MONGODB_URI || 'mongodb://127.0.0.1/socialNetworkDB';

connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Exports

module.exports = connection;