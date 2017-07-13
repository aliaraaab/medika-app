(function($){

 	if($('[placeholder]').length > 0){
        $('input, textarea').placeholder();
    }

    //if(typeof(jcf)!=="undefined") {
	    // jcf.replaceAll();
	//}

	jcf.setOptions('Select', {
		wrapNative: false
	});

    jcf.replaceAll();

})(jQuery);

new WOW().init();