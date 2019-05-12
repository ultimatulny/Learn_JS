$(document).ready(function(){ // Выполнит код при полной загрузке страницы
	
	$('#btn').on('click', function(){ // При нажатии на кнопку, выполнит код внутри!
		alert('Hello!');
	});

	// СЕЛЕКТОРЫ

	// Селектор по тегу
	$('h1').addClass('selected'); // Добавляем класс к селектору!

	// Селекторы по #id
	$('#text').addClass('selected');

	// Селекторы по классу
	$('.book').addClass('selected');

	// Комбинированные селекторы
	$('div.black').addClass('selected');
	$('#li_m ~ li').addClass('selected'); // Тильда ~ выбирает все li, которые ниже #li_m

	// Простые фильтры (:first, :last, :even, :odd)
	$('p:first').addClass('selected'); // Первый p
	$('p:last').addClass('selected'); // Последний p
	$('p:odd').addClass('selected'); // Все четные p
	$('p:even').addClass('selected'); // Все нечетные p
	$('p:eq(0)').addClass('selected'); // Конкретный p по порядку

	// Фильтры по содержимому
	$('h3:has(span)').addClass('selected'); // h3, в котором есть span
	$('.block:parent').addClass('selected'); // Выбор блока, который является родительским
	$('.block:empty').addClass('selected'); // Выбор блока, который пустой

	// Фильтры по атрибутам
	$('a[href="https://ultimatulny.ru"]').addClass('gold'); // Если href определенный
	$('a[href!="https://ultimatulny.ru"]').addClass('selected'); // Если НЕ этот href
	$('a[href!^="https"]').addClass('selected'); // Атрибут по префиксу
	$('a[href!$=".com"]').addClass('selected'); // Атрибут по домену
});