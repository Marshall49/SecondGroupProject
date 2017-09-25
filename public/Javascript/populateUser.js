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

        div.append("<h2>First Name:" + data[i].first_name + "</h2>");
        div.append("<h2>Last Name: " + data[i].last_name + "</h2>");
        div.append("<p>City: " + data[i].city + "</p>");
        div.append("<p>State: " + data[i].state + "</p>");
        div.append("<p>Height: " + data[i].height + "</p>");
        div.append("<p>Weight: " + data[i].weight + "</p>");

        $("#author-container").append(div);

      }

    }
  }
});
