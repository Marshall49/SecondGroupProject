$(document).ready(function() {

  $.get("/metrics", function(data) {

      console.log(data);
      // Call our renderBooks function to add our books to the page
      renderUsers(data);

      $("#author-container").css("color", "black");

    });



  function renderUsers(data) {
    if (data.length !== 0) {

      $("#author-container").empty();
      $("#author-container").show();

      for (var i = 0; i < data.length; i++) {

        var div = $("<div>");

        div.append("<h2>" + data[i].first_name + "</h2>");
        div.append("<p>Author: " + data[i].author + "</p>");
        div.append("<p>Genre: " + data[i].genre + "</p>");
        div.append("<p>Pages: " + data[i].pages + "</p>");

        $("#author-container").append(div);

      }

    }
  }
});
