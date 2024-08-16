// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ave_wpm: {
        type: Number,
        default: 0
    },
    ave_cpm: {
        type: Number,
        default: 0
    },
    best_wpm: {
        type: Number,
        default: 0
    },
    best_cpm: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('UserDetails', UserSchema);
