$(function() {

    $('.loader').delay(1500).fadeOut('slow');
  
// SMOOTH SCROLL
  $("[data-scroll]").on("click", function() {
    event.preventDefault();
    
    let blockId = $(this).data("scroll");
    let blockOffset = $(blockId).offset().top;
    
    $('html, body').animate({
        scrollTop: blockOffset
    }, 500);
    });

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

});