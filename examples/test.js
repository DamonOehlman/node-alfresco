var alfresco = require('../');
var config = {
  accessToken: '805c886c-5510-434f-b43a-822915e7fb13',
  site: 'det.nsw.edu.au',
};
var det = alfresco(config);

alfresco(config).sites(function(err, res, body) {
  if (err) {
    return console.error(err);
  }

  console.log(body);
});