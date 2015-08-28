'use strict';
var dumbExtractor = require('./index');
var should = require('should');

describe('Dumb Extractor', function() {

  it('should throw an error if you dont supply the extractor with an array', function() {
    (function() {
      dumbExtractor();
    }).should.throw('dumb extractor needs an array to pass to the transformer');
  });

  it('should resolve with the array passed into the extractor', function(done) {
    var array = [1, 2, 3, 4, 5];
    var dummy = dumbExtractor(array);
    dummy.extract()
      .then(function(result) {
        result.should.equal(array);
        done();
      })
      .then(null, done);
  });
});
