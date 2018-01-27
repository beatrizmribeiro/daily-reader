document.getElementById("news").addEventListener("click", newsGetter);

function newsGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-new-york-times &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
      
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body) {

        console.log("Response: ", response)
        console.log("Body: ", body)
        var parsedRes = response.articles
 //    for (var i = 0; i < parsedRes.length; i++) {
	// parsedRes[i]
	// console.log(parsedRes[i].title)
      $("#display").load(parsedRes[0].title);
      console.log("parsed res : " + parsedRes[0].title)
  })
  
.fail(function(error) {
        if (error) {
            console.log(error)
          }        

        })
    }
 



   

    