(function($){

	if (matchMedia) {
		var mq = window.matchMedia("(min-width: 1024px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
		if (mq.matches) {
			// window width is at least 1024px

			// $("header").sticky({
			// 	topSpacing:0
			// });

		} else {
			
		}
	}

	var lastScroll = 300;
	$(window).scroll(function(event){
		//Sets the current scroll position
		var st = $(this).scrollTop();
		
		if(st < 50) {
			$('body').addClass('onScroll');
		} else {
			$('body').removeClass('onScroll');
		}

		//Updates scroll position
		lastScroll = st;
	});

})(jQuery);