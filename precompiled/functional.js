$(document).ready(function(){

	$('body').css('opacity','0').delay(100).animate({"opacity": "1"}, 300);
	$('nav').not('.pagination').addClass('shrink_hider');
	$('#nav_toggle').removeClass('no-js').click(function(){
		$('nav:not(.animated)').addClass('animated');
		$('#nav_toggle i').not('#search_icon').toggleClass('rotated');
		$('nav').toggleClass('shrink_hider');
	}).children().not('i,p').click(function(e){
		return false;
	});
	$('#search_icon').click(function(){
		$('#search_field').focus();
	});
	var $eles = $('p').filter(function() {
    	return $(this).text().length == 0;
	});	
	$eles.has('img').addClass("images-fix");

});

