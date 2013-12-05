todoApp.Views.Todo = Backbone.Marionette.ItemView.extend({

    tagName:    'li',
    className:  'todoItem',
	template: _.template('<h3><%= description %></h3>'),

	initialize: function () {
	    this.bindEvents();
	},

	bindEvents: function () {

	    var self = this;

	    todoApp.Plugins.Swipe(self.el, 
	        function () {
	                self.model.trigger('toggleStatus');
	                self.$el.toggleClass('done');
	        },
	        function () {
	                self.model.trigger('removeItem');
	                self.$el.remove();
	        });
	}

});