var request = require('request');
//console.log("Welcome to the GitHub Avatar Downloader!");

function getRepoContributors (repoOwner, repoName, cb) {

  request.get("https://api.github.com/repos/jquery/jquery/contributors")
    .on("error", function (err) {
      throw err;
    })

    .on("response", function (response) {
      console.log("Reponse message:", response.statusMessage);
      //console.log(cb)
    })

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});