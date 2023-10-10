// JavaScript Document
// Author Name: gagander
// Creation Date: 15 July, 2017

( function ( $ ) {
    'use strict';
    $( document ).ready( function () {
	
	// Top Arrow
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1000) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
	});
	
	// Hover action on smart devices
	$('.item img').selectable();
	
	// anchor tooltip
	$('[data-toggle="tooltip"]').tooltip()
	
	// Collapse menu for small devices
	var winWidth = $('body').width();
	if (winWidth <= 1024) {
		
		// Add attribs to menu
		$('#menu .navbar-nav li a').attr('data-toggle', 'collapse');
		$('#menu .navbar-nav li a').attr('data-target', '#menu');
		
		// smooth page Scroll
		$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
		  event.preventDefault();
		  $('html,body').animate({
		  scrollTop: $(this.hash).offset().top - 470},
		  1000);	
		});
		
		// submnu clickable
		$('#menu .sub-nav').hide();
		$('#menu li.sub').prepend('<span class="clicks"><i class="fa fa-chevron-down"></i></span>');
		
		$('#menu li.sub span').on('click', function() {
			$(this).next().next().slideToggle(300);	
		});
		
	} else {
	
		// smooth page Scroll
		$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
		  event.preventDefault();
		  $('html,body').animate({
		  scrollTop: $(this.hash).offset().top - 0},
		  1000);	
		});
		
	}
	  
	});
} ( jQuery ) );




