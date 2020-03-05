(function($) {
  "use strict"; // Start of use strict

  const animDur = 1000;
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, animDur, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


;(function($) {
  "use strict";

  const $cards = $('.avatar-card'),
        $closeButton = $('.card-modal-close');


  $cards.on('click', function(e) {
    const $this = $(this);
    if(!$this.hasClass('active')) $cards.removeClass('active');
    $this.addClass('active');
    e.stopPropagation();
  });


  $closeButton.on('click', function(e) {
    $(this).parents('.avatar-card').removeClass('active');
    e.stopPropagation();
  });

  // closing if we click on the body... this is GLOBAL
  $('body').on('click', function(e) {
    const target = $(e.target);

    if(!target.hasClass('avatar-card')
    && !target.hasClass('card-modal')
    && !target.parent('.card-modal').length) {
      $cards.removeClass('active');
    }

  });

      
})(jQuery);