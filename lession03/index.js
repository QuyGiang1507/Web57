const express = require('express');
const RandomCourse = require('./RandomCourse');
const postModel = require('./post');
const commentModel = require('./comment');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const course = { course: 'web57' }

const login = [
    {success: true},
    {success: false}
]

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World');
})

app.get('/course', (req, res) => {
    res.json(course);
})

app.get('/course/random', (req, res) => {
    res.json(RandomCourse());
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})

app.post('/auth/login', (req, res) => {
    res.send(login[0]);
})

//homework lession 04
app.post('/create_post', async (req, res) => {
    const { content, createdBy } = req.body;
  
    try {
      const newPost = await postModel
        .createPost({ content, createdBy });
      res.send({ success: 1, data: newPost })
    } catch (err) {
      res.send({ success: 0, data: null, message: err.message })
    }
})

app.post('/api/posts', async (req, res) => {
    const { content, createdBy } = req.body;
  
    try {
      const newPost = await postModel
        .createPost({ content, createdBy });
      res.send({ success: 1, data: newPost })
    } catch (err) {
      res.send({ success: 0, data: null, message: err.message })
    }
})

app.get('/api/posts', async (req, res) => {
    try {
      const allPosts = await postModel.getPosts();
  
      res.send({ success: 1, data: allPosts })
    } catch (err) {
      res.send({ success: 0, data: null, message: err.message })
    }
})

app.get('/api/posts/:postId', async (req, res) => {
    try {
      const { postId } = req.params;
  
      const foundPost = await postModel.getPost(postId)
    
      res.send({ success: 1, data: foundPost })
    } catch (err) {
      res.send({ success: 0, data: null, message: err.message })
    }
})

app.put('/api/posts/:postId', async (req, res) => {
    try {
      // path param
      const { postId } = req.params;
      const { content } = req.body;
  
      await postModel.updatePost({ content, postId })
    
      res.send({ success: 1 })
    } catch (err) {
      res.send({ success: 0, data: null, message: err.message })
    }
})

// Ex1
app.delete('/api/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
  
    await postModel.deletePost(postId);
  
    res.send({ success: 1 });
  } catch (err) {
    res.send({ success: 0, data: null, message: err.message })
  }
})

//Ex2 + Ex3
app.post('/api/posts/:postId/comment', async (req, res) => {
  const { content, createdBy } = req.body;
  const { postId } = req.params;

  try {
    const newComment = await commentModel.createComment({ content, createdBy, postId });
    res.send({ success: 1, data: newComment })
  } catch (err) {
    res.send({ success: 0, data: null, message: err.message })
  }
})

app.get('/api/posts/:postId/comment', async (req, res) => {
  try {
    const { postId } = req.params;
    const allComments = await commentModel.getComments(postId);

    res.send({ success: 1, data: allComments })
  } catch (err) {
    res.send({ success: 0, data: null, message: err.message })
  }
})

app.put('/api/posts/:postId/comment/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    await commentModel.updateComment({ content, commentId })
  
    res.send({ success: 1 })
  } catch (err) {
    res.send({ success: 0, data: null, message: err.message })
  }
})

app.delete('/api/posts/:postId/comment/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params;
  
    await commentModel.deleteComment(commentId);
  
    res.send({ success: 1 });
  } catch (err) {
    res.send({ success: 0, data: null, message: err.message })
  }
})

app.listen(9000, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Server starter');
})