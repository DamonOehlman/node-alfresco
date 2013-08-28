/* jshint node: true */
'use strict';

var config = require('./config.json');
var request = require('request');
var http = require('http');
var baseUrl = config.baseUrl ||
  'https://api.alfresco.com/auth/oauth/versions/2';

request.post(
  { url: baseUrl + '/authorize', oauth: config.oauth },

  function(err, res, body) {
    console.log(arguments);
  }
)

// create a server to receive the requests


