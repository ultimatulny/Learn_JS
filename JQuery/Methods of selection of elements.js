$(document).ready(function(){ 

	// МЕТОДЫ ВЫБОРА ЭЛЕМЕНТОВ

	$('.inner').parent().addClass('selected'); // Находит родительский элемент
	$('.block').children().addClass('selected'); // Находит дочерние элементы

	// Возвращает первый ближайший родительский узел или текущий узел
	$('li#in_ul').closest('ul').addClass('selected'); // Находит ближайший ul, который является родителем

	$('#in_ul').parents().addClass('selected'); // Выбирает всех родителей id
	$('#in_ul').parent().addClass('selected'); // Выбирает родителя id

	$('.block').find('h4').addClass('selected'); // Находит в block элемент h4
	
});