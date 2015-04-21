/*
## jQuery Placeholder (2014)
## Author:  Siamak Aghaeipour Motlagh
## Email:   siamak.aghaeipour@gmail.com
## Website: http://blacksrc.com
*/
(function($) {
    $.fn.placeholder = function(options) {
    	var config = $.extend({
			force    : false
		}, options);
    	var el = document.createElement('input');
	    var support = ('placeholder' in el);
		return this.each( function() {
			if(config.force==true  || !support) {
				$(this).each(function() {
					var input = $(this);
					var ph = $(this).attr('placeholder');
					typeof(ph) != 'undefined' ? input.val(ph) : '';
				});
				$(this).focus(function() {
					var input = $(this);
					var vl = $.trim(input.val());
					var ph = $(this).attr('placeholder');
					vl == ph ? $(this).val('') : '';

				}).blur(function() {
					var input = $(this);
					var vl = $.trim(input.val());
					var ph = $(this).attr('placeholder');
					(vl == '' && vl != ph) ? input.val(ph) : '';
				});
			}
		});
	}
}(jQuery));
