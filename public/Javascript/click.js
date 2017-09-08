$(".button").on('click', function(){
    $(".bg-primary").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.bg-primary').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".btn").on('click', function(){
    $(".team").removeClass("hidden");//jQuery function which triggers when developers link clicked
    $(".team").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.team').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});
