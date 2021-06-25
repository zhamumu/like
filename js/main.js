// 滚动条
$(function() {
	var $window = $(window);
	var $progress = $('.progress');
	var sHeight = $('body').height() - $window.height();
	$window.on('scroll', function() {
		window.requestAnimationFrame(function() {
			var value = Math.max(0, Math.min(1, $window.scrollTop() / sHeight));
			updateProgressBar(value);
		});
	});

	function updateProgressBar(value) {
		$progress.css({
			width: value * 100 + '%'
		});
	}
});


