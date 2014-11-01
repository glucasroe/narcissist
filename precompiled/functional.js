$(document).ready(function(){

	$('body').css('opacity','0').delay(100).animate({"opacity": "1"}, 300);
	$('nav').not('.pagination').addClass('shrink_hider');
	$('.nav-toggle').removeClass('no-js').click(function(){
		$('nav:not(.animated)').addClass('animated');
		$('.nav-toggle i').not('.search-icon').toggleClass('rotated');
		$('nav').toggleClass('shrink-hider');
	}).children().not('i,p').click(function(e){
		return false;
	});
	$('.search-icon').click(function(){
		$('.search-field').focus();
	});
	var $eles = $('p').filter(function() {
    	return $(this).text().length == 0;
	});	
	$eles.has('img').addClass("images-fix");

});

