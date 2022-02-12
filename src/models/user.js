const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, index: true },
    usermail: { type: String, required: true },
    date_create: {
        type: Date,
        default: Date.now()
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = mongoose.model( 'User', userSchema );
