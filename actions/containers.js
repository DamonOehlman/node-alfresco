/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(siteId, callback) {
    return http.get('/sites/' + siteId + '/containers', callback);
  };
};