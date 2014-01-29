$(document).ready(function(){
	$('nav').hide();
	$('#nav_toggle').removeClass();
	$('#nav_toggle').click(function(){
		$('#nav_toggle i').toggleClass('rotated');
		$('nav').slideToggle(200);
	});

});