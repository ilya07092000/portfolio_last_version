$(function() {

    $('.loader').delay(200).fadeOut('slow');
  
// SMOOTH SCROLL
  $("[data-scroll]").on("click", function() {
    event.preventDefault();
    
    let blockId = $(this).data("scroll");
    let blockOffset = $(blockId).offset().top;
    
    $('html, body').animate({
        scrollTop: blockOffset
    }, 500);
    });

    // BURGER BTN
    $("#burger").on("click", function() {
        $("nav").toggleClass("active");
        $("#burger").toggleClass("active")
    })

    // FIXED HEADER
    let navigation = $("#header__nav"),
        headerH = $("header").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function() {
        scrollOffset = $(window).scrollTop(); 
        if (scrollOffset > headerH - navigation.innerHeight() - 10) {
            navigation.addClass("fixed");
        } else {
            navigation.removeClass("fixed");
        }
    });
    
    // MODAL
    let modal = $("#modal");
    
    $(".intro__btn").on("click", function() {
        $(".modal__container").fadeIn();
        $("body").addClass("active");
    });

    $("#nav__contact").on("click", function() {
        $("#burger").removeClass("active")
        $("nav").removeClass("active");
        $(".modal__container").fadeIn();
        $("body").addClass("active");

    })

    $(".close__btn").on("click", function() {
        $(".modal__container").fadeOut(); 
        $("body").removeClass("active"); 
    });

    $("#modal").on("click", function(e) {
        if (e.target == this) {
            $(".modal__container").fadeOut();
            $("body").removeClass("active");    
        }
    })

    // SLIDER
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});