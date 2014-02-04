$(document).ready(function(){

	$('body').css('opacity','0').delay(300).animate({"opacity": "1"}, 200);
	$('nav').addClass('shrink_hider');
	$('#nav_toggle').removeClass('no-js').click(function(){
		$('nav:not(.animated)').addClass('animated');
		$('#nav_toggle i').toggleClass('rotated');
		$('nav').toggleClass('shrink_hider');
	});

});