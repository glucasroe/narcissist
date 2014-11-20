$(document).ready(function(){
	$('.search-icon').click(function(){
		$('.search-field').focus();
	});
	//var $eles = $('p').filter(function() {
    //	return $(this).text().length == 0;
	//});	
	//$eles.has('img').addClass("images-fix");
	$('img.big-image').parent().addClass('images-fix');
});

