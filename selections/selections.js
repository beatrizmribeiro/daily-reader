function newsGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-new-york-times &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
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
      for (var i = 0; i < parsedRes.length; i++) {
          parsedRes[i]
          console.log(parsedRes[i])
          articleTitles.push(parsedRes[i].title)
          
              var images = parsedRes[i].urlToImage 
              
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                var img = $(`<img src=${images}>`)

                a.append(img)
                $('#image_display').append(a)
              
              // console.log(`<a href=${parsedRes[i].url}><img src=${images}/></a>`)
                               
            }

    $("#article_display").text("headline : " + articleTitles);
       
       })
    })
  }    
newsGetter()





function businessGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-wall-street-journal &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
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
      for (var i = 0; i < parsedRes.length; i++) {
          parsedRes[i]
          console.log(parsedRes[i])
          articleTitles.push(parsedRes[i].title)
          
              var images = parsedRes[i].urlToImage 
              
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                var img = $(`<img src=${images}>`)

                a.append(img)
                $('#image_display').append(a)
              
              console.log(`<a href=${parsedRes[i].url}><img src=${images}/></a>`)
                               
            }

    $("#article_display").text("headline : " + articleTitles);
       
       })
    })
  }    
businessGetter()



function sportsGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=espn &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
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
      for (var i = 0; i < parsedRes.length; i++) {
          parsedRes[i]
          console.log(parsedRes[i])
          articleTitles.push(parsedRes[i].title)
          
              var images = parsedRes[i].urlToImage 
              
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                var img = $(`<img src=${images}>`)

                a.append(img)
                $('#image_display').append(a)
                               
            }

    $("#article_display").text("headline : " + articleTitles);
       
       })
    })
  }    
sportsGetter()





function entertainmentGetter() {
    var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=mtv-news &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
    console.log("query " + queryURL)
 

 $("#entertainment").click(function() {
    // console.log(images)

    

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response, body){
      console.log("resp : " + response)
      var parsedRes = response.articles
      var articleTitles = [];
      var images = "";
      for (var i = 0; i < parsedRes.length; i++) {
          parsedRes[i]
          console.log(parsedRes[i])
          articleTitles.push(parsedRes[i].title)
          
              var images = parsedRes[i].urlToImage 
              
                var a = $(`<a href=${parsedRes[i].url}></a>`)
                var img = $(`<img src="${images}" >`)

                a.append(img)
                $('#image_display').append(a)
              
            
                               
            }

    $("#article_display").text("headline : " + articleTitles);
       
       })
    })
  }    

entertainmentGetter()

// function imageGetter() {
//     var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-new-york-times &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
//     console.log("query " + queryURL)

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })

//     .done(function(response, body, articleTitles){
//       console.log("resp : " + response)
//       var parsedRes = response.articles
//       var articleTitles = [];
//       var images = "";
//       // var url = []
//       for (var i = 0; i < parsedRes.length; i++) {
//           parsedRes[i]
//           console.log(parsedRes[i])
//           var image = parsedRes[i].urlToImage 

//       }
  
//   $("#news").click(function() {

//     // $("#article_display").text("headline : " + articleTitles);
//     // $("#image_display").text("Image Urls : " + imageUrls);
//     var img = $('<img />', {src : image + $('#image_display').val()});
//     img.appendTo('#image_display'); 


//        })
//     })
//   }    
// imageGetter()


// function imageGetter() {
//     var queryURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=the-new-york-times &' + 'apiKey=d13abbdf045a48efadfe6380e367c2d8';
//     console.log("query " + queryURL)

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })

//     .done(function(response, body, articleTitles){
//       console.log("resp : " + response)
//       var parsedRes = response.articles
//       var ImageUrls = [];
//       for (var i = 0; i < parsedRes.length; i++) {
//           parsedRes[i]
          
          
            
//             }
//   $("#news").click(function() {

//     $("#display").text("headline : " + articleTitles);
//        })
//     })
//   }    
// imageGetter()

