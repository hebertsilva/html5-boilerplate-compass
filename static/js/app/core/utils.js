/*
	## Utils js 
*/

var Utils =  {
	ajaxForm: function( form ) {
		return $.ajax({
			type: form.attr('method'),
			url: form.attr('action'),
			data: form.serialize()
		});
	}
};
