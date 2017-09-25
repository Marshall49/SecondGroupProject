$(document).ready(function() {

  $.get("/metrics", function(data) {

      console.log(data);
      // Call our renderBooks function to add our books to the page
      renderUsers(data);

      $("#author-container").css("color", "black");
      $("#author-container").css({"display":"flex", "top":"100px"});
      $("#author-container").css("font-family", "'Varela', sans-serif");


    });



  function renderUsers(data) {
    if (data.length !== 0) {

      $("#author-container").empty();
      $("#author-container").show();

      for (var i = 0; i < data.length; i++) {

        var div = $("<div>");

        div.append("<h2>First Name:</h2>");
        div.append("<h2>Last Name:</h2>");
        div.append("<p>City:</p>");
        div.append("<p>State:</p>");
        div.append("<p>Height:</p>");
        div.append("<p>Weight:</p>");

        $("#author-container").append(div);

      }

    }
  }
});
