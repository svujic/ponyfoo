'use strict';

var taunus = require('taunus');
var notFound = '/not-found';

module.exports = function (req, res, next) {
  if (req.url !== notFound) {
    res.redirect(notFound); return;
  }

  res.viewModel = {
    model: {
      title: 'Not Found!',
      action: 'error/not-found',
      meta: {
        canonical: notFound
      }
    }
  };
  next();
};
