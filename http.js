/* jshint node: true */
'use strict';

var request = require('request');

module.exports = function(config) {
  var site = (config || {}).site;
  var accessToken = (config || {}).accessToken;
  var baseHeaders;
  var baseUrl;
  var baseCmisURl;

  // if we don't have a site, then complain
  if (! site) {
    return new Error('Alfresco site is required');
  }

  if (! accessToken) {
    return new Error('An access token is required');
  }

  // prepare the base config headers
  baseHeaders  = {
    Authorization: 'Bearer ' + accessToken
  };


  // url
  baseUrl = 'https://api.alfresco.com/' + site +
    '/public/alfresco/versions/1';

  // initialise the base cmis url
  baseCmisURl = 'https://api.alfresco.com/' + site +
    '/public/cmis/versions/1.0';


  function http(opts, callback) {
    var requestOpts = {
      method: opts.method || 'GET',
      url: (opts.cmis ? baseCmisURl : baseUrl) + opts.path,
      json: !opts.cmis,
      headers: baseHeaders
    };

    return request(requestOpts, callback);
  };

  // patch in the get helper
  http.get = function(url, callback) {
    return http({ method: 'GET', path: url }, callback);
  };

  return http;
};