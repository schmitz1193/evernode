//MODELS/note.js
//no variable  name..just use module.exports
'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Notes',
  mongoose.Schema({
    title: String,
    text: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories'
    }
  })
);


//categories can have many notes
//type is saying what you put in there should look like an object
//ref is say the object id needs to match something in the notes table-which is in mongo. Must be the capitalized, plural version, i.e. the model name

