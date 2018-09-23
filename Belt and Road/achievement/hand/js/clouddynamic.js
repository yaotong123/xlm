$(document).ready(function() {

	//初始加载
	setTimeout(function(){
		cloudAnimate();
	},500);
	//云动画
	function cloudAnimate() {
		$('#cloud1').animate({
			'right': '-100px',
			'opacity':'0.6'
		}, 5000);
		$('#cloud2').animate({
			'left': '-80px',
			'opacity':'0.6'
		}, 5000);
		$('#cloud3').animate({
			'right': '-100px',
			'opacity':'0.6'
		}, 5000);

	}

});