(function($){

	function getHighestDOM(dom) {
		var highest_height = 0;
		dom.each(function (index, val) {
			if (highest_height <= $(val).height ()) {
				highest_height = $(val).height ();
			}
		});
		return highest_height;
	}

	// Get Highest Dom
 	var res = function() {
 		$('.promo-thumbnail .thumbnails').each (function () {
			$(this).find(".thumbnail-area").height("auto");
			cH = getHighestDOM($(this).find(".thumbnail-area"));
			$(this).find(".thumbnail-area").height(cH);
		});
	};

	$(window).resize(function () {
		setTimeout( function(){
			res();
		},100);
	});

	$(document).ready(function(e) {
		setTimeout( function(){
			res();
		},100);
	});

})(jQuery);