function newsGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=associated-press &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)

    $("#news").click(function() {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      var titles;
      for (var i = 0; i < parsedRes.length; i++) {
        parsedRes[i]
          // var formattedTitles = parsedRes[i].split(",").join("<br />")


          var articleString = articleTitles.push(parsedRes[i].title)
          // articleTitles.split(',').join("<br />")

          // articleTitles.push(parsedRes[i].title)
          console.log("article titles : " + articleTitles)
        
          
                var images = parsedRes[i].urlToImage 
                console.log("Images: " + images)
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                $("a").attr("target", "_blank");
                console.log("a : " + a)
                var img = $(`<img src="${images}" >`)
                console.log("img : " + img)
                a.append(img)
                $('#image_display').append(a)

            }
              // var titlesString = articleTitles.toString();
              // console.log(titlesString)
              // var removeCommas = articleTitles.split(',').join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>' );
              // console.log(removeCommas)
              var separatedTitles = articleTitles.join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>')

             $("#article_display").html(separatedTitles);

               })
            })
          }  


newsGetter()





function businessGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-economist &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)

    $("#business").click(function() {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      var titles;
      for (var i = 0; i < parsedRes.length; i++) {
        parsedRes[i]
          // var formattedTitles = parsedRes[i].split(",").join("<br />")


          var articleString = articleTitles.push(parsedRes[i].title)
          // articleTitles.split(',').join("<br />")

          // articleTitles.push(parsedRes[i].title)
          console.log("article titles : " + articleTitles)
        
          
                var images = parsedRes[i].urlToImage 
                console.log("Images: " + images)
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                console.log("a : " + a)
                var img = $(`<img src="${images}" >`)
                console.log("img : " + img)
                a.append(img)
                $('#image_display').append(a) 


            }
              // var titlesString = articleTitles.toString();
              // console.log(titlesString)
              // var removeCommas = articleTitles.split(',').join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>' );
              // console.log(removeCommas)
              var separatedTitles = articleTitles.join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>')

             $("#article_display").html(separatedTitles);

               })
            })
          }  


businessGetter()



function sportsGetter() {
    
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=bleacher-report &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)

    $("#sports").click(function() {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      var titles;
      for (var i = 0; i < parsedRes.length; i++) {
        parsedRes[i]
          // var formattedTitles = parsedRes[i].split(",").join("<br />")


          var articleString = articleTitles.push(parsedRes[i].title)
          // articleTitles.split(',').join("<br />")

          // articleTitles.push(parsedRes[i].title)
          console.log("article titles : " + articleTitles)
        
          
                var images = parsedRes[i].urlToImage 
                console.log("Images: " + images)
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                console.log("a : " + a)
                var img = $(`<img src="${images}" >`)
                console.log("img : " + img)
                a.append(img)
                $('#image_display').append(a) 


            }
              // var titlesString = articleTitles.toString();
              // console.log(titlesString)
              // var removeCommas = articleTitles.split(',').join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>' );
              // console.log(removeCommas)
              var separatedTitles = articleTitles.join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>')

             $("#article_display").html(separatedTitles);

               })
            })
          }  


sportsGetter()





function entertainmentGetter() {
 

    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=mtv-news &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 
    $("#entertainment").click(function() {
    

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      var titles;
      for (var i = 0; i < parsedRes.length; i++) {
        parsedRes[i]
          // var formattedTitles = parsedRes[i].split(",").join("<br />")


          var articleString = articleTitles.push(parsedRes[i].title)
          // articleTitles.split(',').join("<br />")

          // articleTitles.push(parsedRes[i].title)
          console.log("article titles : " + articleTitles)
        
          
                var images = parsedRes[i].urlToImage 
                console.log("Images: " + images)
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                console.log("a : " + a)
                var img = $(`<img src="${images}" >`)
                console.log("img : " + img)
                a.append(img)
                $('#image_display').append(a) 


            }
              // var titlesString = articleTitles.toString();
              // console.log(titlesString)
              // var removeCommas = articleTitles.split(',').join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>' );
              // console.log(removeCommas)
              var separatedTitles = articleTitles.join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>')

             $("#article_display").html(separatedTitles);

               })
            })
          }  

entertainmentGetter()


function healthGetter() {

    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=medical-news-today &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 
    $("#health").click(function() {
    

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      var titles;
      for (var i = 0; i < parsedRes.length; i++) {
        parsedRes[i]
          // var formattedTitles = parsedRes[i].split(",").join("<br />")


          var articleString = articleTitles.push(parsedRes[i].title)
          // articleTitles.split(',').join("<br />")

          // articleTitles.push(parsedRes[i].title)
          console.log("article titles : " + articleTitles)
        
          
                var images = parsedRes[i].urlToImage 
                console.log("Images: " + images)
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                console.log("a : " + a)
                var img = $(`<img src="${images}" >`)
                console.log("img : " + img)
                a.append(img)
                $('#image_display').append(a) 


            }
              
              var separatedTitles = articleTitles.join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>')

             $("#article_display").html(separatedTitles);

               })
            })
          }  


function techGetter() {

    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=wired &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 
    $("#tech").click(function() {
    

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      var titles;
      for (var i = 0; i < parsedRes.length; i++) {
        parsedRes[i]
          // var formattedTitles = parsedRes[i].split(",").join("<br />")


          var articleString = articleTitles.push(parsedRes[i].title)
          // articleTitles.split(',').join("<br />")

          // articleTitles.push(parsedRes[i].title)
          console.log("article titles : " + articleTitles)
        
          
                var images = parsedRes[i].urlToImage 
                console.log("Images: " + images)
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                console.log("a : " + a)
                var img = $(`<img src="${images}" >`)
                console.log("img : " + img)
                a.append(img)
                $('#image_display').append(a) 


            }
              
              var separatedTitles = articleTitles.join('<br>' + '<br>' + '<br>' + '<br>' + '<br>' +'<br>' + '<br>')

             $("#article_display").html(separatedTitles);

               })
            })
          }  
techGetter()

