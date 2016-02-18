'use strict'
//MODELS/note.js
//no variable  name..just use module.exports
const mongoose = require('mongoose');
module.exports = mongoose.model('Notes', mongoose.Schema({
  title: String,
  text: String
  })
);
