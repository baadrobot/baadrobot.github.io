<?php

$result = mail("logoanna1@gmail.com", "Контактная форма", "Данные контактной формы: 
		\nФамилия и имя: $_POST[guest_name];
		\nНомер телефона: $_POST[guest_phone];
		\nЭлектронная почта: $_POST[guest_email];
		\nРебенку: $_POST[guest_kid_age] лет/года;
		\nВы уже занимались с логопедом? - $_POST[guest_logoped_lessons];
		\nВаш вопрос: $_POST[guest_question].
	");

if ($result) {
	echo "Сообщение успешно отправлено!";
} else {
	echo "Не удалось отправить сообщение!";
}


?>