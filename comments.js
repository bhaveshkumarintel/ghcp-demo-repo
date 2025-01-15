// create web server with express
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// load comments.json file
const commentsPath = path.join(__dirname, 'comments.json');
const comments = JSON.parse(fs.readFileSync(commentsPath, 'utf-8'));

// set up middleware to parse the request body
app.use(express.json());

// set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// set up a route to serve comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// set up a route to create a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
  res.status(201).json(newComment);
});

// start the server
app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});