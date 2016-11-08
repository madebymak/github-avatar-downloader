var request = require('request');
//console.log("Welcome to the GitHub Avatar Downloader!");
var GITHUB_USER = "madebymak";
var GITHUB_TOKEN = "958480b71aa96b2bd710ee40b90c766a8a9e2a38"

function getRepoContributors (repoOwner, repoName, cb) {

var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

console.log(requestURL);


}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});