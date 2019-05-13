$(document).ready(function(){ 

	// jQuery - сложение двух чисел

	$('#formSum').on('submit', function(event){ // При нажатии на кнопку submit
		event.preventDefault(); // Чтобы страница не обновлялась
		
		var numberOne,
			numberTwo,
			result;

		// Берем значения из input
		numberOne = $('#numberOne').val(); 
		numberTwo = $('#numberTwo').val();

		if(isNaN(numberOne)){
			numberOne = 0;
		}
		if(isNaN(numberTwo)){
			numberTwo = 0;
		}

		result = +numberOne + +numberTwo; // Сложение двух чисел	

		$('#sumResult').text(result); // Вывод суммы

	});

	
});