$(document).ready(function(){$("body").css("opacity","0").delay(100).animate({opacity:"1"},300),$("nav").addClass("shrink_hider"),$("#nav_toggle").removeClass("no-js").click(function(){$("nav:not(.animated)").addClass("animated"),$("#nav_toggle i").not("#search_icon").toggleClass("rotated"),$("nav").toggleClass("shrink_hider")}).children().not("i,p").click(function(a){return!1}),$("#search_icon").click(function(){$("#search_field").focus()});var a=$("p img"),n=a.index();0===n&&a.parent().addClass("images-fix")});