var todoApp = new (Backbone.View.extend({

	tagName:    'div',
	className:  'todoApp',

	Views:          {},
	Models:         {},
	Collections:    {},
	Plugins:        {},

	Router: new (Backbone.Router.extend({
		routes: {
			'':     'todos',
			'add':  'addTodo'
		},

		todos: function () {

			todoApp.todos = todoApp.todos || new todoApp.Collections.Todos;

			var view = new todoApp.Views.Todos({
				collection: todoApp.todos
			});

			todoApp.$el.html(view.render().$el.fadeIn(500));

		},

		addTodo: function () {

			todoApp.todos = todoApp.todos || new todoApp.Collections.Todos;

			var view = new todoApp.Views.AddTodo({
				collection: todoApp.todos
			});

			todoApp.$el.html(view.render().$el.fadeIn(500));
		}
	})),

	start: function () {
		this.render();
		Backbone.history.start();
	},

	render: function () {
		$(document.body).html(this.$el);
	}

}))();