"use strict";

window.jQuery = window.$ = require('jquery');
var BLC = BLC || {};

BLC = (function() {
    // PRIVATE VARIABLES
    var
        $window = $(window),
        $introduction = $('.home').find('#header .content-wrapper'),

    // PRIVATE FUNCTIONS
        setIntroHeight = function() {
            if ($window.outerHeight() < 500) {
                $introduction.css('height', 500);
            } else {
                $introduction.css('height', $window.outerHeight());
            }
        }
    ;

    // PUBLIC METHODS
    return {
        init: function() {
            // DOM ready

            // any resize events
            $(document).on('resize', function() {
                // set intro height
                setIntroHeight();
            }).trigger('resize');
        }//,
        //pageInit: function() {
            // page load
        //}
    };
}());

// ON DOM READY
$(function() {
    BLC.init();
});

// // ON PAGE LOAD
// $(window).load(function() {
//     BLC.pageInit();
// });
