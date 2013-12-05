todoApp.Views.Todos = Backbone.Marionette.CompositeView.extend({

    tagBane:            'div',
    className:          'showTodos',
    itemViewContainer:  '.todoList',
    itemView:           todoApp.Views.Todo,

	template: _.template('<ul class="todoList"></ul><p><button id="addNewBtn" class="btn">Add new</button></p>'),

	initialize: function () {
		this.collection.on('fetch:success', this.render, this);
	},

	onRender: function () {
		$('.todoApp').html(this.$el.fadeIn(500));
	},

	events: {
		'click #addNewBtn': 'addTodo'
	},

	addTodo: function (e) {
		Backbone.history.navigate("add", {trigger: true});
	}

});