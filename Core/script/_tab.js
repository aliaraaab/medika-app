(function($){
	
	$('.category-nav-slide .slide a').click(function() {
		var activeLink = $(this).data('target');
		var targetTab = $('.tab-content .tab-content-area.'+activeLink);

		targetTab.siblings().removeClass('active fadeIn');
		targetTab.addClass('active animated fadeIn');

		$('.category-nav-slide .slide a').each(function () {
			$(this).removeClass("active");
		})

		$(this).addClass("active");
	});

})(jQuery);