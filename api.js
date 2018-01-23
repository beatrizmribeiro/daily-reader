var request = require("request");

request('https://newsapi.org/v2/top-headlines?' +
          'sources=hacker-news &' +
          'apiKey=d13abbdf045a48efadfe6380e367c2d8', function(error, response, body) {
  // If the request was successful...
  if (!error && response.statusCode === 200) {
    // Then log the body from the site!
    let parsedBody = JSON.parse(body);
    console.log(parsedBody.articles[0].url);
  }
});

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=hacker-news &' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 