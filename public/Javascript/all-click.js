$('a.flipper').click(function(){
  $('.flip').toggleClass('flipped');
});


$(".btn-login").on('click', function(){
    $("#login").css("display", "block");
});

$(".btn-signup").on('click', function(){
    $("#login").css("display", "block");
});

$(".btn-xl").on('click', function(){
    $(".team").css("display", "block");
});


$(".butt").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".bg-primary").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.bg-primary').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".btn-xl").on('click', function(){
    $(".team").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.team').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".js-scroll-trigger").click(function(){
        // $("#div1").fadeIn();
        // $("#div2").fadeIn("slow");
        $(".social-btns").fadeIn(7000);
});




var modal = document.getElementById('#login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
      modal2.style.display = "none";
  }
}
