'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

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

app.post('/notes', (req,res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
})
