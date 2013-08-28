/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(callback) {
    return http.get('/sites', callback);
  };
};