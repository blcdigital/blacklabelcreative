/*jslint eqeqeq: true, undef: true */
/*global $, window, console, alert */

var BLC = BLC || {};

BLC.app = (function() {
	var
		// PRIVATE VARIABLES
		$window = $(window),
		$content = $("#content"),
		$sidebar = $("#sidebar"),
		largeScreenWidth = 959,
		windowWidth, windowHeight,

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
		},
		lightbox = function(images) {
			var $overlay = $("<div id='lightboxOverlay' />").on("click", function() {
					$overlay.fadeOut(function() {
						$overlay.detach();
					});
					$container.fadeOut(function() {
						$container.remove();
					});
				}),
				$container = $("<div id='lightboxContainer'><div /></div>");

			// bind gallery click
			$(".portfolio-gallery").on("click", "a", function(e) {
				e.preventDefault();

				// load the img
				$container.find("div").html("<img alt='' src='" + $(e.currentTarget).attr("href") + "' />");
				$container.find("img").load(function() {
					$overlay.appendTo($("body")).css({
						width: windowWidth,
						height: windowHeight
					}).fadeIn();
					$container.appendTo($("body")).css({
						marginTop: -($container.outerHeight() / 2),
						marginLeft: -($container.outerWidth() / 2)
					}).fadeIn();
				});
			});
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

			// start lightbox
			if ($(".portfolio-gallery").length) {
				lightbox($(".portfolio-gallery"));
			}

			// init the resize listener
			$window.on("resize", function() {
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
			windowWidth = $window.width();
			windowHeight = $window.height();

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