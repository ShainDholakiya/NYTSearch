$("#search").on("click", function() {
    event.preventDefault();
    var search = $("#search_term").val();
    var records = $("#number_records").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            for (var i = 0; i < records; i++) {
              $(".articles").append("<a href = web.url>"+ response.response.docs[i].headline.main + "</a>");
              
            }

})
})