const express = require('express');

const app = express();
app.use(express.json())

app.get('/api/test', (req, res, next) => {
    const byPast = req.query.byPast;
    if(byPast === 1) {
        next();
    } 
    res.send({ success : 0, message: 'Invalid params' })
});