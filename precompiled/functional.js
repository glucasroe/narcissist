$(document).ready(function(){
	$('.search-icon').click(function(){
		$('.search-field').focus();
	});
	//var $eles = $('p').filter(function() {
    //	return $(this).text().length == 0;
	//});	
	//$eles.has('img').addClass("images-fix");
	$('img.big-image').parent('p').addClass('images-fix');

	var page = 2;
    var url_blog = window.location;
    $(window).scroll(function() {
   		if($(window).scrollTop() + $(window).height() === $(document).height()) {
			$.get((url_blog +'/page/'+page),
			function(content) {
        		if(page <= max_pages){
        			$('.content').append($(content).children(".post"));
        			page = page + 1;
    			}
			});
   		}
	});
});