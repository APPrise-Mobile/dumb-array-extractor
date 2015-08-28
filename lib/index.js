'use strict';
var q = require('q');
var _ = require('lodash');

module.exports = function DumbArrayExtractor(array) {
  if(!_.isArray(array)) {
    throw new Error('dumb extractor needs an array to pass to the transformer');
  }

  var extract = function extract() {
    return q.when(array);
  };

  return {
    extract: extract
  };
};
