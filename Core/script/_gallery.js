(function($){

	$('.gallery-slide').lightGallery({
		thumbnail:true,
		animateThumb: false,
		showThumbByDefault: false
	});

	$('.gallery-section .list-gallery-group .row').lightGallery({
		thumbnail:true,
		animateThumb: false,
		showThumbByDefault: false,
		loadYoutubeThumbnail: true,
		youtubeThumbSize: 'default',
		loadVimeoThumbnail: true,
		vimeoThumbSize: 'thumbnail_medium',
	});

})(jQuery);