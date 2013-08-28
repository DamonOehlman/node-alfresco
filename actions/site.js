/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(id, callback) {
    return http.get('/sites/' + id, callback);
  };
};