var request = require('request');
var fs = require('fs');

var GITHUB_USER = "madebymak";
var GITHUB_TOKEN = "958480b71aa96b2bd710ee40b90c766a8a9e2a38"


function getRepoContributors (repoOwner, repoName, cb) {

  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var requestOptions = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };

  request(requestOptions, function(err, response, body) {
    if (err) throw err;
    cb(JSON.parse(response.body));
  })
};

getRepoContributors(repoOwnerName, repoURL, function(result) {
  result.forEach(function (avatarBody) {
  downloadImageByURL(avatarBody.avatar_url, avatarBody.login)
  })

    function downloadImageByURL(url, filePath) {

    request.get(url) //url
       .on("error", function (err) {
          throw err;
       })

       .on('response', function (response) {
         console.log('Downloading...', response.statusMessage);
       })

       .pipe(fs.createWriteStream("./pics/" + filePath + ".jpg"));
  }

});

