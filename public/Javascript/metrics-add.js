//Adding a New User to the Database
$("#upd").on("click", function(event) {
  window.location.href="/user-metrics";
  event.preventDefault();
  // Getting references to the user input from modal
  var userLoggedData = {
  user_calories: $("#cal-burned").val().trim(),
  activity_mileage: $("#total-miles").val().trim(),
  user_weight: $("#curr-weight").val().trim(),
  
};

$.post("/api/user", userLoggedData)
  // on success, run this callback
  .done(function(data) {
    // log the data we found
    console.log(data);
  });
});