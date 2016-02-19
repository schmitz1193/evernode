'use strict';

//Writing our own middleware (method override/bodyparse all middleware but we did not create)
//no err cause you just go ahead and execute Next
//log request to db function

const Log = require('../models/log');

module.exports = (req, res, next) => {
  Log.create({
    userAgent: req.headers['user-agent'],
    route: req.url,
    verb: req.method
  }, next);
};
