const express = require('express');
const RandomCourse = require('./RandomCourse');

const app = express();

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

app.listen(9000, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Server starter');
})