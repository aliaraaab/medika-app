(function($){

	$(".search-area .search-icon").on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass("click").siblings(".search-form").slideToggle(128);
	});

})(jQuery);