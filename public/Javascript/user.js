$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $(".form-login");
  var emailInput = $("input#log-email-input");
  var passwordInput = $("input#log-password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});



//   $(".btn_sign").on("click", function(event) {
//   window.location.href="/cms";
//   event.preventDefault();
//   var userData {
//   username: $("#username").val().trim(),
//   email: $("#email").val().trim(),
//   password: $("#password").val().trim()
//   }
//
//   $.post("/api/users", userData)
//   // on success, run this callback
//   .done(function(data) {
//     // log the data we found
//     console.log(data);
//   });
// });



// $(document).ready(function() {
//   // Getting references to our form and inputs
//   var loginForm = $("form#reg");
//   var userInput = $("input#username")
//   var emailInput = $("input#email");
//   var passwordInput = $("input#password");
//
//   // When the form is submitted, we validate there's an email and password entered
//   loginForm.on("submit", function(event) {
//     event.preventDefault();
//     var userData = {
//       username: userInput.val().trim(),
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };
//
//     if (!userData.username || !userData.email || !userData.password) {
//       return;
//     }
//
//     // If we have an email and password we run the loginUser function and clear the form
//     loginUser(userData.username, userData.email, userData.password);
//     userInput.val("");
//     emailInput.val("");
//     passwordInput.val("");
//   });
//
//   // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//   function loginUser(username, email, password) {
//     $.post("/api/login", {
//       username: username,
//       email: email,
//       password: password
//     }).then(function(data) {
//       window.location.replace(data);
//       // If there's an error, log the error
//     }).catch(function(err) {
//       console.log(err);
//     });








// $(document).ready(function() {
// var nameInput = $("#username")
// var mailInput = $("#email");
// var passInput = $("#password");
//
//  $(document).on("submit", "#reg", handlePatientFormSubmit);
//
//    function handlePatientFormSubmit(event) {
//     event.preventDefault();
//     // Don't do anything if the name fields hasn't been filled out
//     // Calling the upsertUser function and passing in the value of the name input
//     insertUser({
//       username: nameInput.val(),
//       email: mailInput.val(),
//       password: passInput.val()
//     });
//   };
//
//     function insertUser(userData) {
//     $.post("/api/users", userData)
//   }
//
// });
