var request = require('request');

var GITHUB_USER = "madebymak";
var GITHUB_TOKEN = "958480b71aa96b2bd710ee40b90c766a8a9e2a38"

function getRepoContributors (repoOwner, repoName, cb) {

  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var requestOptions = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    };
  };

  request(requestOptions, function(err, response, body) {
    if (err) throw err;
    cb(JSON.parse(response.body));
  });
};

getRepoContributors("jquery", "jquery", function(result) {
  result.forEach(function (avatarBody) {
    console.log(avatarBody.avatar_url);
  })
});