$(document).ready(function() {
  // Getting references to the user input from modal
  var newUser = {
  firstName: $("#firstNameInput").val();
  lastName: $("#lastNameInput").val();
  userName: $("#userNameInput").val();
  password: $("#passwordInput").val();
  city: $("#userCityInput").val();
  state: $("#userStateInput").val();
  zip: $("#userStateInput").val();
  height: $("#userHeightInput").val();
  weight: $("#userWeightInput").val();
};

  // Adding event listeners to the form to create a new object, and the button to cancel
  // a user submission
  $(document).on("submit", ".modal-content2", handlemodalContentSubmit);
  $(document).on("click", ".cancelbtn2", handleCancelButtonPress);

  getUserInfo();

  function handlemodalContentSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    
    // send an AJAX POST-request with jQuery
	  $.post("/api/new", newUser)
	    // on success, run this callback
	    .done(function(data) {
	      // log the data we found
	      console.log(data);
	    
	    });
    };
  }