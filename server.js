'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const note = require('./routes/note');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');  //all middleware must come before your routes

app.use(bodyParser.urlencoded({
  extended: false
}));  //how do you want to handle the extended character set??

app.use(methodOverride('_method')); //look for query parameter in a post entry?

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(note);


//wrap listen into the mongoose .connect
mongoose.connect('mongodb://localhost:27017/evernode',(err) => {
  if (err) throw err;
  app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
  });
});
