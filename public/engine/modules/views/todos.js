todoApp.Views.Todos = Backbone.Marionette.CompositeView.extend({

    tagBane:            'div',
    className:          'showTodos',
    itemViewContainer:  '.todoList',
    itemView:           todoApp.Views.Todo,

	template: _.template('<ul class="todoList"></ul><p><button id="addNewBtn" class="btn">Add new</button></p>'),

	initialize: function () {
		this.listenTo(this.collection, 'reset', this.render);
	},

	onRender: function () {
		todoApp.appContainer.html(this.$el.fadeIn(500));
	},

	events: {
		'click #addNewBtn': 'addTodo'
	},

	addTodo: function (e) {
		Backbone.history.navigate("add", {trigger: true});
	}

});