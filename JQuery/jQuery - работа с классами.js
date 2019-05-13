$(document).ready(function(){ 

	// jQuery - работа с классами

	// .addClass() - Добавить класс
	$('#addGreen').on('click', function(){
		$('#testBox').addClass('greenBg');
	});

	// .removeClass() - Добавить класс
	$('#removeGreen').on('click', function(){
		$('#testBox').removeClass('greenBg');
	});

	// .toggleClass() - Добавить класс
	$('#toggleGreen').on('click', function(){
		$('#testBox').toggleClass('greenBg');
	});

	// .css() - Добавить свой CSS - Bad Practice!
	$('#customCSS').on('click', function(){
		$('#testBox').css('border', '5px solid #00796B');
	});
	
});