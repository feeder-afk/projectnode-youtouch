const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    date_create: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model( 'User', userSchema );