$(document).ready(function(){

	$('#openBtn').on('click', function(){

		$('#modal_1').removeClass('displayNone');
		$('#modal_1').toggleClass('window');

	});

	$('#ExitBtn').on('click', function(){
		
		$('#modal_1').addClass('displayNone');
		$('#modal_1').toggleClass('window');

	});

});