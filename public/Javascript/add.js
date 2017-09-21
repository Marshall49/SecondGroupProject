//Adding a New User to the Database
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
    console.log("Added New User!");
  });
});



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
