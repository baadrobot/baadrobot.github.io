$(document).ready(function(){
	var opacLi = $('#idUl li').css('opacity');
	$('#idUl li').hover(function(){
		$('#idUl li').not($(this)).stop().animate({opacity:'0.3', bottom: '0'}, 100);
		
	}, function(){
		$('#idUl li').not($(this)).stop().animate({opacity: opacLi, bottom: '3px'}, 100);
	});
}); // end of ready