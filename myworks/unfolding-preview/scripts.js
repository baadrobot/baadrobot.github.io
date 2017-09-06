$(document).ready(function(){
	$('.wrapper').hover(function(){
		$(this).children().stop().animate({marginTop: '100%', opacity: 0}, 500);
	},function(){
		$(this).children().stop().animate({marginTop: '0%', opacity: 1}, 500);
	});
});