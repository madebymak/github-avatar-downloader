var request = require('request');
var fs = require('fs');

var GITHUB_USER = "madebymak";
var GITHUB_TOKEN = "958480b71aa96b2bd710ee40b90c766a8a9e2a38"

var repoUserName = process.argv[2];
var nameRepo = process.argv[3];

function getRepoContributors (repoOwner, repoName, cb) {

  if (!repoUserName || !nameRepo) {
    console.log("Please enter valid GitHub name and repo!");
    return;
  }

  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var requestOptions = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };

  request(requestOptions, function(err, response, body) {
    if (err) throw err;
    console.log("Reponse status code:", response.statusCode);
    console.log("Response message:", response.statusMessage);
    cb(JSON.parse(response.body));
  })
};

getRepoContributors(repoUserName, nameRepo, function(result) {
  result.forEach(function (avatarBody) {
  downloadImageByURL(avatarBody.avatar_url, avatarBody.login)
  })

    function downloadImageByURL(url, filePath) {

    request.get(url) //url
       .on("error", function (err) {
          throw err;
       })

       .on('response', function (response) {
         console.log('Downloading avatar photo...', response.statusMessage);
       })

       .pipe(fs.createWriteStream("./pics/" + filePath + ".jpg"));
  }
});

