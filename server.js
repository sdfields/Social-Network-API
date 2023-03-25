// Require

const db = require('./config/connection');
const express = require('express');
const routes = require('./routes');

// PORT info

const PORT = process.env.port || 3001;

// Middleware

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('Social Network API Server running on port ${PORT}.');
});