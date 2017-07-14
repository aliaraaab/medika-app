(function($){

	function masonry(){

	    var $grid = $('.grid.masonry').masonry({
			itemSelector: '.grid-item',
			fitWidth: true,
		});
	}


	$(document).ready(function () {
		if ($('.grid.masonry').length > 0) {
			setTimeout( function(){
				masonry();
			},100);
		}
	});

	$(window).resize(function(){
		if ($('.grid.masonry').length > 0) {
			setTimeout( function(){
				masonry();
			},100);
		}
		// $this = $('.grid.masonry');
		// $this.masonry({
		// 	itemSelector: '.grid-item',
		// 	fitWidth: true,
		// });
	});

})(jQuery);