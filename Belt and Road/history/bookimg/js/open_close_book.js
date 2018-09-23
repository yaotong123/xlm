$(document).ready(function() {
	$(window).scroll(function() {
		var bHeight = $(document).scrollTop();
		$(window).scroll(function() {
			var aHeight = $(document).scrollTop();
			//判断往下滑动作
			if((aHeight - bHeight) > 0) {
				//指定高度关闭卷轴
				if(aHeight >= 100) {
					if(signals == 2) {
						closebook();
					}
				}
				bHeight = aHeight;
			}
			//判断往上滑动作
			if((aHeight - bHeight) < 0) {
				//指定高度打开卷轴
				if(aHeight <= 700) {
					if(signals == 0) {
						openbook();
					}
				}
				bHeight = aHeight;
			}

		});
	});

	//默认打开
	window.onload = openbook();
	//点击卷轴左边
	/**
	 * 0:书卷处于关闭状态。
	 * 1:书卷处于执行中状态。
	 * 2:书卷处于打开状态。
	 * */
	var signals = 1;
	$('.l-pic-index').on('click', function() {
		if(signals == 2) {
			closebook();
		}
		if(signals == 0) {
			openbook();
		}
	});
	//点击卷轴右边
	$('.r-pic-index').on('click', function() {
		if(signals == 2) {
			closebook();
		}
		if(signals == 0) {
			openbook();
		}
	});
	//卷轴打开动画效果
	function openbook() {
		signals = 1;
		$(".l-pic-index").animate({
			'left': '70px',
			'top': '-5px'
		}, 2500);
		$(".r-pic-index").animate({
			'right': '70px',
			'top': '-5px'
		}, 2500);
		$(".l-bg-index").animate({
			'width': '550px',
			'left': '110px'
		}, 2550);
		$(".r-bg-index").animate({
			'width': '550px',
			'right': '110px'
		}, 2550, function() {
			$(".main-index").fadeIn(800);
			$("#poetry").fadeIn(3000);
			setTimeout(function() {
				signals = 2;
			}, 3000);

		});
	}

	//卷轴关闭动画效果
	function closebook() {
		signals = 1;
		$("#poetry").fadeOut(500);
		$(".main-index").fadeOut(1000);
		$(".l-pic-index").animate({
			'left': '600px',
			'top': '-5px'
		}, 2000);
		$(".r-pic-index").animate({
			'right': '600px',
			'top': '-5px'
		}, 2000);
		$(".l-bg-index").animate({
			'width': '25px',
			'left': '635px'
		}, 2050);
		$(".r-bg-index").animate({
			'width': '25px',
			'right': '635px'
		}, 2050, function() {
			signals = 0;
		});
	}
});