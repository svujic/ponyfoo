'use strict';

var util = require('util');
var listOrSingle = require('./lib/listOrSingle');
var searchResults = require('./lib/searchResults');
var articleSearch = require('../../services/articleSearch');
var separator = /[+/,_: -]+/ig;

module.exports = function (req, res, next) {
  var terms = req.params.terms.split(separator);
  var title = util.format('Search results for "%s"', terms.join('", "'));
  var handle = listOrSingle(res, searchResults(res, next));

  res.viewModel = {
    model: {
      title: title,
      meta: {
        canonical: '/articles/search/' + terms.join('-'),
        description: 'This search results page contains all of the ' + title.toLowerCase()
      },
      action: 'articles/search-results'
    }
  };

  articleSearch.query(terms, handle);
};
