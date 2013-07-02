/*jslint eqeqeq: true, undef: true */
/*global $, window, console, alert */

var BLC = BLC || {};

BLC.app = (function() {
	var
		// PRIVATE VARIABLES
		largeScreenWidth = 959,
		windowWidth,
		$content = $("#content"),
		$sidebar = $("#sidebar"),

		// PRIVATE FUNCTIONS
		equaliseColumns = function() {
			// make sure column heights are equal for large screens

			// if it's a large screen
			if (windowWidth >= largeScreenWidth) {
				// if sidebar is taller than the content
				if ($sidebar.outerHeight() > $content.outerHeight()) {
					$content.css({
						height: $sidebar.outerHeight()
					});
				}
			} else {
				// remove fixed heights
				$content.css({
					height: "auto"
				});
			}
		};

	// PUBLIC METHODS
	return {
		init: function() {
			// DOM ready

			// open social links in a new window
			$(".social-links").find("ul").on("click", "a", function(e) {
				e.preventDefault();

				window.open($(this).attr("href"));
			});

			// init the resize listener
			$(window).on("resize", function() {
				BLC.app.resizeListener();
			});
		},
		pageInit: function() {
			// page load

			// set page vars
			BLC.app.resizeListener();
		},
		resizeListener: function() {
			// update vars on resize
			windowWidth = $(window).width();

			// resize the content
			equaliseColumns();
		}
	};
}());

// ON DOM READY
$(function() {
	BLC.app.init();
});

// ON PAGE LOAD
$(window).load(function() {
	BLC.app.pageInit();
});