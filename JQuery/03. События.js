$(document).ready(function(){ 

	// События в jQuery

	/*

	$('#button-1').click(function(){ // Клик
		$('#top-header').toggleClass('pinkColor');
	});

	*/

	// Данный способ работает быстрее и лучше!
	// Клик
	$('#button-1').on('click', function(){ 
		$('#top-header').toggleClass('pinkColor');
	});

	// Двойной клик
	$('#top-header').on('dblclick', function(){
		$('#top-header').toggleClass('pinkColor');
	});

	// При наведении мыши
	$('#testArea').on('mouseenter', function(){
		$('#testArea').toggleClass('orangeBg');
	});

	// При уведении мыши
	$('#testArea').on('mouseleave', function(){
		$(this).toggleClass('orangeBg'); // Можно использовать this 
	});

	// ФОРМА

	// При фокусе на input
	$('#inputName').on('focus', function(){
		$(this).addClass('focus');
	});

	// Уходим из фокуса	
	$('#inputName').on('blur', function(){
		$(this).removeClass('focus');
	});

	// Когда написали и вышли из фокуса	
	$('#inputName').on('change', function(){
		$('#textHolder').text( $('#inputName').val() ); // Вписывает текст
	});

	// Срабатывает сразу, во время написания
	$('#inputName').on('keyup', function(){
		$('#textHolder').text( $('#inputName').val() ); // Вписывает текст
	});

	// Проверка на нажатие определенных клавиш, в данном случае 27 - ESC
	$('#inputName').on('keyup', function(event){
		if(event.which == 27){
			alert('123');
		}
	});
	
});