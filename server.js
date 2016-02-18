'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const Note = require('./models/note');

app.set('view engine', 'jade');  //all middleware must come before your routes

app.use(bodyParser.urlencoded({
  extended: false
}));  //how do you want to handle the extended character set??

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.get('/notes/new', (req,res) => {  //serve up the form
  res.render('new-note');
});

app.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {note: note});
  });
});


app.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;

    res.redirect(`/notes/${note._id}`);
  });
});

//wrap listen into the mongoose .connect
mongoose.connect('mongodb://localhost:27017/evernode',(err) => {
  if (err) throw err;
  app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
  });
});
