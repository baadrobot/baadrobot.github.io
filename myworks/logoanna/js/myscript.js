$(document).ready(function() {

	$("#my_form").submit(function(eventObject) {
		if($("#guest_name").val() == "" || $("#guest_phone").val() == "" || $("#guest_email").val() == "" || $("#guest_question").val() == "") {
			eventObject.preventDefault();
			alert("Вы не заполнили все поля формы!");
		}
	});

}); // конец ready