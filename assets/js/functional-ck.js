$(document).ready(function(){$(".search-icon").click(function(){$(".search-field").focus()}),$("img.big-image").parent("p").addClass("images-fix");var n=2,i=window.location;$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()&&$.get(i+"/page/"+n,function(i){max_pages>=n&&($(".content").append($(i).children(".post")),n+=1)})})});