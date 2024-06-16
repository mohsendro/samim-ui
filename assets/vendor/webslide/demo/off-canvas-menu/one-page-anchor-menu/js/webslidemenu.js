/*
 * Plugin: Web Slide - Responsive Mega Menu for Bootstrap 3+
 * Demo Link: http://webslidemenu.webthemex.com/
 * Version: v3.3
 * Author: webthemex
 * License: http://codecanyon.net/licenses/standard
*/

 document.addEventListener("touchstart", function() {},false);
 $(function() {
	$('#wsnavtoggle').click(function () {
		$('.wsmenucontainer').toggleClass('wsoffcanvasopener');
	});
	
	$('.overlapblackbg').click(function () {
	  $('.wsmenucontainer').removeClass('wsoffcanvasopener');
	});
	

	$('.wsmenu > .wsmenu-list > li > a').click(function () {
	  $('.wsmenucontainer').removeClass('wsoffcanvasopener');
	});

	$(function() {
	  $('.wsmenu a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1200);
			return false;
		  }
		}
	  });
	});

});