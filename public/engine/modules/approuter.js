(function () {

	todoApp.Router = Backbone.Marionette.AppRouter.extend({
		
		routes: {
			'':     'todos',
			'add':  'addTodo'
		},

		todos: function () {
			var view = new todoApp.Views.Todos({
				collection: new todoApp.Collections.Todos
			});
		},

		addTodo: function () {
			var view = new todoApp.Views.AddTodo({
				collection: new todoApp.Collections.Todos
			});
		}
	});


}).call(this);