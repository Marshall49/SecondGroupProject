$(".button").on('click', function(){			//jQuery function which triggers when developers link clicked
    $(".bg-primary").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.bg-primary').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});
