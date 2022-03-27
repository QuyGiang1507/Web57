const express = require('express');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: String,
    createdBy: {
        type: String,
        require: true,
    },
});

const PostModel = mongoose.model('Post', postSchema);

const commentSchema = new mongoose.Schema({
    content: String,
    createdBy: {
        type: String,
        require: true,
    },
    postId: String,
});

const CommentModel = mongoose.model('Comment', commentSchema);

mongoose.connect('mongodb://localhost:27017/demo_db', err => {
    if (err) {
        return console.log("Err connect mongodb", err);
    }

    console.log("Connect DB successfully")
});

const app = express();

app.use(express.json());

app.post('/api/posts', async (req, res) => {
    const { content, createdBy } = req.body;

    const newPost = await PostModel.create({
        content,
        createdBy,
    });
    
    res.send({ success: 1, data: newPost });
})

app.get('/api/posts', async (req, res) => {
    const posts = await PostModel.find({});

    res.send({ success: 1, data: posts });
})

app.get('/api/posts/:postId', async (req, res) => {
    const { postId } = req.params;

    const foundPost = await PostModel.findOne({ _id: postId });

    res.send({ success: 1, data: foundPost });
})

app.put('/api/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;

    const updatePost = await PostModel.findByIdAndUpdate(
        postId,
        { content },
        { new: true}
    )

    res.send({ success: 1, data: updatePost });
})

app.delete('/api/posts/:postId', async (req, res) => {
    const { postId } = req.params;

    const deletedPost = await PostModel.findByIdAndDelete(postId)

    res.send({ success: 1, data: deletedPost });
})

//homework
//Ex1
app.post('/api/comments', async (req, res) => {
    const { content, createdBy, postId } = req.body;

    const newComment = await CommentModel.create({
        content,
        createdBy,
        postId,
    });
    
    res.send({ success: 1, data: newComment });
})

app.get('/api/comments', async (req, res) => {
    const comments = await CommentModel.find({});

    res.send({ success: 1, data: comments });
})

app.get('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;

    const foundComment = await CommentModel.findOne({ _id: commentId });

    res.send({ success: 1, data: foundComment });
})

app.put('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;

    const updateComment = await CommentModel.findByIdAndUpdate(
        commentId,
        { content },
        { new: true}
    )

    res.send({ success: 1, data: updateComment });
})

app.delete('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;

    const deletedComment = await CommentModel.findByIdAndDelete(commentId)

    res.send({ success: 1, data: deletedComment });
})

//Ex2
app.get('/api/posts/:postId/comments', async (req, res) => {
    const { postId } = req.params;

    const postComment = await CommentModel.find({ postId: postId });

    res.send({ success: 1, data: postComment });
})

app.listen(8080, err => {
    if (err) {
        return console.log("Error start app", err);
    }
    console.log(`Server started successfully at ${8080}`)
})