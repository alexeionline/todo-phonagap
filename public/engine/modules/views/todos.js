todoApp.Views.Todos = Backbone.Marionette.CompositeView.extend({

    tagBane:            'div',
    className:          'showTodos',
    itemViewContainer:  '.todoList',
    itemView:           todoApp.Views.Todo,

	template: _.template('<ul class="todoList"></ul><p><button id="addNewBtn" class="btn">Add new</button></p>'),

	initialize: function () {
		this.render();
		//this.collection.on('fetch:success', this.render, this)
	},

	events: {
		'click #addNewBtn': 'addTodo'
	},

	addTodo: function () {
		Backbone.history.navigate("add", {trigger: true});
	}

});