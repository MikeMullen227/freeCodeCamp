//jQuery
$(document).ready(function() {
  $("#submit").click(function() {
    // get the value entered in the search field and store in searchTerm
    var searchTerm = $("#search").val();
    // concatenate the search term entered by user to the wiki url
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        dataType: "json",
        success: function(data) {
          
        $("#results").empty();
          for(var i = 0; i < data[1].length; i++) {
              $("#results").prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a>" + "<p>" + data[2][i] + "</p></li>"); 
          }
          //get heading console.log(data[1][0]);
          //get description console.log(data[2][0]);
          //get link console.log(data[3][0]);
        },
        error: function() {
          console.log("error");
        }
    })
  })
});

