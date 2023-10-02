
const menuButton = document.querySelector(".header-btn-menu");
const menuCloseButton = document.querySelector(".mobile-menu-close-btn");
const menuContainer = document.querySelector(".mobile-menu");
const menuItem = document.querySelector("mobile-menu-navi-item-link");

menuButton.addEventListener("click", () => {
  menuContainer.classList.add("is-open");
});

menuCloseButton.addEventListener("click", () => {
  menuContainer.classList.remove("is-open");
});


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