const express=require('express');
const dotenv=require('dotenv');

dotenv.config();

const connect_mongodb = require('./config/database');

const app = require('./app');

connect_mongodb();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});