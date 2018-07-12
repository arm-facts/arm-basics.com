// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var downCounterSpan = clock.querySelector('.downcounter');
     
        function updateClock() {
            var t = getTimeRemaining(endtime);
           
            downCounterSpan.innerHTML = "This website will be closed in " + t.days + " Days " + ('0' + t.hours).slice(-2) + " Hours " + ('0' + t.minutes).slice(-2) + " Minutes " + ('0' + t.seconds).slice(-2) + " Seconds.";
           
            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
        }
     
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    var deadline = 'July 15 2018 23:59:59 GMT+0100';
    initializeClock('clockdiv', deadline);

})(jQuery); // End of use strict
