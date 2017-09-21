//Displaying the Database entries on the "Metrics" Page
$("#register-button").on("click", function(event) {
  event.preventDefault();

$.get("/api", function(data) {

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

    // Now add all of our character data to the well we just placed on the page

    // make the name an h2,
    $("#User-well-" + i).append("<h2>" + data[i].first_name + "</h2>");
    // the role an h3,
    $("#User-well-" + i).append("<h3>Name: " + data[i].last_name + "</h4>");
    // the age an h3,
    // $("#User-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
    // // and the forcepoints an h3.
    // $("#User-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
  }
});
});
