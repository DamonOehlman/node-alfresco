/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(id, callback) {
    // make the request
    return http({
      cmis: true,
      method: 'GET',
      path: '/atom/content?id=' + id
    }, callback)
  };
};