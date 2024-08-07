const express = require('express');
const app = express();
app.use(express.json());

// Define a simple route
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
