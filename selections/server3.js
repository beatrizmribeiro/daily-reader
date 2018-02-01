var request = require('request');

var axios = require("axios");
var cheerio = require("cheerio");
request("https://apnews.com/dfc79d047a7c4723a83145513630fd47", function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
// request("https://apnews.com/dfc79d047a7c4723a83145513630fd47", function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
    // var content = $('.articleBody').each(function(i, element){
    	// console.log(".articlebody")
      // var a = $(this).prev();
      // console.log(content)
    // }
  // })
 //   }
 // })


  // #articleContent
  // .articleContent