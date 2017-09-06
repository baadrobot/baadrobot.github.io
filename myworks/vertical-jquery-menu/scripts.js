$(document).ready(function(){
	
	$('#nav').draggable();
	
	$('.menuItem').click(function(){
		if($(this).hasClass('selected')) {
		$('.miCon').slideUp(300);
		$(this).removeClass('selected');
		}
		else {
			$('.miCon').slideUp(300);
			$('.menuItem').removeClass('selected');
			$(this).children('.miCon').slideDown(300);
			$(this).addClass('selected');
		}
	});
}); // end ready