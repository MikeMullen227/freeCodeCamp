//jQuery
$(document).ready(function() {
  
    // callback function to be passed into click and keypress jquery objects
    var callback = function() {
      
    // get the value entered in the search field and store in searchTerm
    var searchTerm = $("#search").val();
      
    // concatenate the search term entered by user to the wiki url
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
      
    // make ajax request to wiki api to get search results
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        dataType: "json",
        success: function(data) {
          
        // clear results before each search  
        $("#results").empty();
          
          // loop through json array to add results to ul
          for(var i = 0; i < data[1].length; i++) {
              $("#results").prepend("<li><a target='_blank' href= " + data[3][i] + ">" + data[1][i] + "</a>" + "<p>" + data[2][i] + "</p></li>"); 
          }
          
          // clear search field after each search
          $("#search").val('');
          
        },
        error: function() {
          console.log("error");
        }
    })

  }
   
  // on click and keypress both work on first search attempt since callback was created first
  $("#submit").click(callback);
 
  $("#search").keypress(function(e) {
    if (e.which == 13) {
      callback();
    }
});
});

