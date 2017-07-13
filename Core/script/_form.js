(function($){
	
	$('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        startDate: '1d',
        todayHighlight: true,
        autoclose: true,
        disableTouchKeyboard: 'true',
        templates: {
                        leftArrow: '<i class="fa fa-caret-left"></i>',
                        rightArrow: '<i class="fa fa-caret-right"></i>'
                    }
    });

    $('.date-range .datepicker').each(function() {
        $(this).datepicker('clearDates');
    });

    $('.input-daterange input').each(function() {
        $(this).datepicker('clearDates');
    });

    $(".booking-message").validate({
		rules: {
            fullname: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            people: {
                required: true
            },
            package: {
                required: true
            },
        },
        
        groups: {
            book_date: "start_date end_date"
        },

        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'strong',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.form-group').length) {
                error.insertBefore(element);
            } 
            else if (element.attr("name") == "start_date" || element.attr("name") == "end_date") {
                error.insertBefore(element.parent().parent());
            }
            else {
                error.insertBefore(element);
            }
        },
    });

})(jQuery);