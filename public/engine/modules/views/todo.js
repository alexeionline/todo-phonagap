(function () {
	todoApp.Views.Todo = Backbone.Marionette.ItemView.extend({

		tagName:    'li',
		className:  'todoItem',
		template: _.template('<h3><%= DESCRIPTION %></h3>'),

		initialize: function () {
		    this.bindEvents();
		},

		modelEvents: {
			"change:ISDONE": "changeState"
		},

		changeState: function () {
			this.$el.toggleClass('done');
		},

		bindEvents: function () {

			var thisView = this;

			todoApp.Plugins.Swipe(thisView.el, 

				function () {
					thisView.model.trigger('toggleStatus');
				},

				function () {
					thisView.model.trigger('removeItem');
				}
			);
		}

	});

}).call(this);