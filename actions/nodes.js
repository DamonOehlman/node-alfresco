/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(entityId, callback) {
    var url = '/nodes/' + entityId

    return http.get(url, callback);
  };
};