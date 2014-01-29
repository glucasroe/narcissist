$(document).ready(function(){
	$('nav').addClass('shrink_hider');
	$('#nav_toggle').click(function(){
		$('nav:not(.animated)').addClass('animated');
		$('#nav_toggle i').toggleClass('rotated');
		$('nav').toggleClass('shrink_hider');
	});

});