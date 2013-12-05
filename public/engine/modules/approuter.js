(function () {

	todoApp.Router = Backbone.Marionette.AppRouter.extend({
		
		routes: {
			'':     'todos',
			'add':  'addTodo'
		},

		todos: function () {
			todoApp.todos = todoApp.todos || new todoApp.Collections.Todos;

			var view = new todoApp.Views.Todos({
				collection: todoApp.todos
			});
		},

		addTodo: function () {
			todoApp.todos = todoApp.todos || new todoApp.Collections.Todos;

			var view = new todoApp.Views.AddTodo({
				collection: todoApp.todos
			});
		}
	});


}).call(this);