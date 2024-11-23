const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    photo_path: {
        type: String,
        required: false
    },
    audios_path: {
        type: [String],
        required: false
    }
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
