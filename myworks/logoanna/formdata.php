<?php

$result = mail("test@test.ru", "Контактная форма", "Данные контактной формы: 
		\nФамилия и имя: $_POST[selfName];
		\nЭлектронная почта: $_POST[selfMail];
		\nНомер телефона: $_POST[selfNumber];
		\nРебенчитакову: $_POST[yearsOld] лет/года;
		\nУже занимались логопедией?: $_POST[answer1];
		\nЕсли да то как?: $_POST[answer2] $_POST[answer3];
		\nВаш вопрос: $_POST[question].
	");

if ($result) {
	echo "Сообщение успешно отправлено!";
} else {
	echo "Не удалось отправить сообщение!";
}


?>