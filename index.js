/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');
var request = require('request');
var actionsPath = path.resolve(__dirname, 'actions');
var actions = fs.readdirSync(actionsPath);

/**
  # node-alfresco

  In progress [Alfresco Cloud](https://my.alfresco.com/) node hooks.  This
  has been written for the purposes of synchronizing documents stored in
  alfresco with a local file system.

  ## Example Usage

  To be completed

**/

module.exports = function(config) {
  var api = {};
  var http = require('./http')(config);

  // if the http interface was not valid, then abort
  if (http instanceof Error) {
    return http;
  }

  // attach the api actions
  actions.forEach(function(action) {
    api[path.basename(action, '.js')] = require('./actions/' + action)(http);
  });

  return api;
};