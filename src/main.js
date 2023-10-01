$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); 
});

$(window).scroll(function() { 
    let scrolled = $(window).scrollTop(); 

    if(scrolled > 350) { 
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});