(function($){

	$('.features .features-slide .wrapper').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		// fade: true,
		// cssEase: 'linear',
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		prevArrow: "<span class='fa fa-chevron-circle-left arrow-prev'></span>",
		nextArrow: "<span class='fa fa-chevron-circle-right arrow-next'></span>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});


	$('.gallery .gallery-slide').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.room-facility .list-item .gallery-slide').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.client .client-slide').slick({
		dots: false,
		arrows: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
		nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.blog-slide .slide-area').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
		nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

})(jQuery);