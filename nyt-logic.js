// SETUP VARIABLES
// ==========================================================
// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
// Counter to keep track of article numbers as they come in
var articleCounter = 0;
// FUNCTIONS
// ==========================================================
// This runQuery function expects two parameters:
// (the number of articles to show and the final URL to download data from)
function runQuery(numArticles, queryURL) {
  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "NYTData"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {
    // Logging the URL so we have access to it for troubleshooting
    console.log("------------------------------------");
    console.log("URL: " + queryURL);
    console.log("------------------------------------");
    // Log the NYTData to console, where it will show up as an object
    console.log(NYTData);
    console.log("------------------------------------");
    // Loop through and provide the correct number of articles
    for (var i = 0; i < numArticles; i++) {
      // Add to the Article Counter (to make sure we show the right number)
      articleCounter++;
      // Create the HTML well (section) and add the article content for each
      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "article-well-" + articleCounter);
      $("#well-section").append(wellSection);
      // Confirm that the specific JSON for the article isn't missing any details
      // If the article has a headline include the headline in the HTML
      if (NYTData.response.docs[i].headline !== "null") {
        $("#article-well-" + articleCounter)
          .append(
            "<h3 class='articleHeadline'><span class='label label-primary'>" +
            articleCounter + "</span><strong> " +
            NYTData.response.docs[i].headline.main + "</strong></h3>"
          );
        // Log the first article's headline to console
        console.log(NYTData.response.docs[i].headline.main);
      }
      // If the article has a byline include the headline in the HTML
      if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
        $("#article-well-" + articleCounter)
          .append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");
        // Log the first article's Author to console.
        console.log(NYTData.response.docs[i].byline.original);
      }

      if (NYTData.response.docs[i].web_url) {
        $("#article-well-" + articleCounter)
          .append("<p><a href>" + NYTData.response.docs[i].web_url + "</p>");
        // Log the first article's Author to console.
        console.log(NYTData.response.docs[i].byline.original);
      }
      // Then display the remaining fields in the HTML (Section Name, Date, URL)
      $("#articleWell-" + articleCounter)
        .append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>");
      $("#articleWell-" + articleCounter)
        .append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
      $("#articleWell-" + articleCounter)
        .append("a href='" + NYTData.response.docs[i].web_url + "'>" +
          NYTData.response.docs[i].web_url + "</a>");
      // Log the remaining fields to console as well


      console.log(NYTData.response.docs[i].pub_date);
      console.log(NYTData.response.docs[i].section_name);
      console.log(NYTData.response.docs[i].web_url);
    }
  });
}
// METHODS
// ==========================================================
// on.("click") function associated with the Search Button
$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks).
  event.preventDefault();
  // Initially sets the articleCounter to 0
  articleCounter = 0;
  // Empties the region associated with the articles
  $("#well-section").empty();
  // Grabbing text the user typed into the search input
  searchTerm = $("#search-term").val().trim();
  var queryURL = queryURLBase + searchTerm;
  // Number of results the user would like displayed
  numResults = $("#num-records-select").val();
  
  runQuery(numResults, queryURL);
});

$("#button1").on("click", function(event){
  buttonSearch = document.getElementsByName("Trump");
  console.log(buttonSearch)
  var queryURL = queryURLBase + buttonSearch
})
// This button clears the top articles section
$("#clear-all").on("click", function() {
  articleCounter = 0;
  $("#well-section").empty();
});


//pulls an article by search term

// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2018-01-16&' +
//           'sortBy=popularity&' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';

// var req = new Request(url);

// fetch(req)

//     .then(function(response) {
//         console.log(response.json());
//     })

//pulls an article by topic  

//Business (wall street Journal)

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=the-wall-street-journal&' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 

//entertainment buzzfeed

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=buzzfeed&' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 

//entertainment   Entertainment weekly

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=entertainment-weekly &' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 

// //Health -- Medical News Today

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=medical-news-today &' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 

//Sports -- ESPN

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=espn &' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 

//Tech -- HackerNEWS

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=hacker-news &' +
//           'apiKey=d13abbdf045a48efadfe6380e367c2d8';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     }) 

