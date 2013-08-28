/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(siteId, id, callback) {
    var url = '/sites/' + siteId + '/containers/' + id;

    return http.get(url, callback);
  };
};