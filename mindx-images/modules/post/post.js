const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        require: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
    }
}, {
    timestamps: true,
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;