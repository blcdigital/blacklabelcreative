/*jslint eqeqeq: true, undef: true */
/*global $, window, console, alert */

var BLC = BLC || {};

BLC = (function() {
    // PRIVATE VARIABLES
    var
        $introduction = $('#header').find('.content-wrapper'),

    // PRIVATE FUNCTIONS
        setIntroHeight = function() {
            $introduction.css('height', $(window).outerHeight());
        }
    ;

    // PUBLIC METHODS
    return {
        init: function() {
            // DOM ready

            // set intro height
            setIntroHeight();

            // any resize events
            $(document).on('resize', function() {
                setIntroHeight();
            });
        },
        pageInit: function() {
            // page load
        }
    };
}());

// ON DOM READY
$(function() {
    BLC.init();
});

// ON PAGE LOAD
$(window).load(function() {
    BLC.pageInit();
});
