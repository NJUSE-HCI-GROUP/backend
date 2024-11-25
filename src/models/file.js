const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    original_name: {
        type: String,
        required: true,
    },
    store_path: {
        type: String,
        required: true
    },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
