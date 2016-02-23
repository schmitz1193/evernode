//MODELS/category.js
'use strict';

'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Categories',
  mongoose.Schema({
    name: String,
    description: String,
    // notes: [{
    //   type: mongoose.Schema.Types.ObjectID,
    //   ref: 'Notes'
    // }]
  })
);

