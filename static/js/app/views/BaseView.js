
App.objects.BaseView = function() {
	this.win = $(window);

	this.initEvents();
};

App.objects.BaseView.prototype = {
	initEvents: function() {
		// Init Events
	}
};

$(function() {
	App.objects.baseView = new App.objects.BaseView();
});