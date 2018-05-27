(function ($) {

    "use strict";

        // PRE loader
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        // Smoothscroll js
        $(function() {
          $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            if ($anchor) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 49
                }, 1000);
            }
            event.preventDefault();
          });
        });


        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);
