/* jshint node: true */
'use strict';

module.exports = function(http) {
  return function(id, callback) {
    var url;

    if (typeof id == 'function') {
      callback = id;
      id = '';
    }

    // initialise the url based on the id
    url = '/atom' + (id && '?id=' + id);

    // make the request
    return http({ cmis: true, method: 'GET', path: url }, callback)
  };
};