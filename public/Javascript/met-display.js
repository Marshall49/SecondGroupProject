//Displaying the Database entries on the "Metrics" Page
$("#register-button").on("click", function(event) {
  event.preventDefault();

$.get("/api/user/:id", function(data) {

  // for each user that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "User-well-" + i);
    // append the well to the well section
    $("#author-container").append(wellSection);

    // Now add all of our user data to the well we just placed on the page

    // make the first name an h2,
    $("#User-well-" + i).append("<h2>First Name: " + data[i].first_name + "</h2>");
    // the last name an h2,
    $("#User-well-" + i).append("<h2>Last Name: " + data[i].last_name + "</h2>");
    //The City
    $("#User-well-" + i).append("<h3>City: " + data[i].city + "</h3>");
    //The State
    $("#User-well-" + i).append("<h3>State: " + data[i].state + "</h3>");
    //The Height
    $("#User-well-" + i).append("<h3>Height: " + data[i].height + "</h3>");
    //The Weight
    $("#User-well-" + i).append("<h3>Weight: " + data[i].weight + "</h3>");
  }
});

});
