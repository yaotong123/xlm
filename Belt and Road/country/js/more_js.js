$(document).ready(function() {
	var flag = 0;
	$('.more_btn').on('click', function() {
		if(flag == 0) {
			flag = 1;
			$('.more_btn').css('display', 'none');
			$('.more_css').css('display', 'block');
			setTimeout(function() {
				$('.more_btn').css('display', 'block');
				$('.more_btn').css('margin-top', '5%');
				$('.more_btn').html('Put away');
				$('.more_css').css('display', 'none');
				$('.main').css('display', 'block');
			}, 1000);
		} else {
			flag = 0;
			$('.main').css('display', 'none');
			$('.more_btn').css('margin-top', '0%');
			$('.more_btn').html('Show more');
		}

	});
});