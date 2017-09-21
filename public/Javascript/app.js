$("#register-button").on("click", function(event) {
  window.location.href="/metrics";
  event.preventDefault();
  // Getting references to the user input from modal
  var newUser = {
  first_name: $("#firstName").val().trim(),
  last_name: $("#lastName").val().trim(),
  user_name: $("#userName").val().trim(),
  password: $("#passWord").val().trim(),
  city: $("#userCity").val().trim(),
  state: $("#userState").val().trim(),
  zip_code: $("#userZip").val().trim(),
  height: $("#userHeight").val().trim(),
  weight: $("#userWeight").val().trim()
};

$.post("/api/user", newUser)
  // on success, run this callback
  .done(function(data) {
    // log the data we found
    console.log(data);
  });
});

$("#log-button").on("click", function(event) {
  window.location.href="/metrics";
  event.preventDefault();

  var User;

  $.get("/api/user", User)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
  });
});

// $("#login-button").on("click", function(event) {
//   event.preventDefault();
//   // Getting references to the user input from modal
//   var registered = {
//   user_name: $("#log-user").val().trim(),
//   password: $("#log-pass").val().trim()
// };
//
//
// $.post("/api/user", registered)
//   // on success, run this callback
//   .done(function(data) {
//     // log the data we found
//     console.log(data);
//
//   });
// });







$(".button").on('click', function(){
    $(".bg-primary").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.bg-primary').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".btn").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".team").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.team').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".js-scroll-trigger").click(function(){
        // $("#div1").fadeIn();
        // $("#div2").fadeIn("slow");
        $(".social-btns").fadeIn(7000);
});


  // Adding event listeners to the form to create a new object, and the button to cancel
  // a user submission
  // $(document).on("submit", ".signupbut", handlemodalContentSubmit);
  // // $(document).on("click", ".cancelbtn2", handleCancelButtonPress);



  // function handlemodalContentSubmit(event) {
  //   event.preventDefault();
  //   // Don't do anything if the name fields hasn't been filled out
  //   if (!nameInput.val().trim().trim()) {
  //     return;
  //   }

    // send an AJAX POST-request with jQuery
