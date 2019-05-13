$(document).ready(function(){ 

	// jQuery - анимация

	// .animate() - Изменить CSS свойства с анимацией
	// .animate({CSS props}, duration in ms)
	$('#customWidth').on('click', function(){
		$('#testBox').animate({'width': '200px'}, 1000);
	});

	$('#customOpacity').on('click', function(){
		$('#testBox').animate({'opacity': '0'}, 1000);
	});


	// Скрытие и показ hide show

	$('#hide').on('click', function(){
		$('#testBox').hide(1000);
	});

	$('#show').on('click', function(){
		$('#testBox').show(2000);
	});

	$('#hideAndShow').on('click', function(){
		$('#testBox').hide(1000).delay(500).show(1000);
	});


	// Fade - скрытие и показ

	$('#fadeOut').on('click', function(){
		$('#testBox').fadeOut(1000);
	});

	$('#fadeIn').on('click', function(){
		$('#testBox').fadeIn(1000);
	});

	$('#fadeToggle').on('click', function(){
		$('#testBox').fadeToggle(1000);
	});


	// Slide - скрытие и показ

	$('#slideUp').on('click', function(){
		$('#testBox').slideUp();
	});

	$('#slideDown').on('click', function(){
		$('#testBox').slideDown();
	});

	$('#slideToggle').on('click', function(){
		$('#testBox').slideToggle();
	});
	
});