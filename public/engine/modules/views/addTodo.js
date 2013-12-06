todoApp.Views.AddTodo = Backbone.Marionette.ItemView.extend({

    tagName:    'div',
    className:  'addTodo',

	template: _.template('<p><input type="text" id="description" class="input" placeholder="Todo" autofocus></p><p><button id="addBtn" class="btn">Save</button></p><p><button id="backBtn" class="btn">Back</button></p>'),

	initialize: function () {
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add',   this.backToList);
	},

	onRender: function () {
		todoApp.appContainer.html(this.$el.fadeIn(500));
	},

	events: {
	    'click #addBtn':    'addTodo',
	    'click #backBtn':   'backToList'
	},

	addTodo: function () {

		var description = $('#description').val();

		if (description) {

			this.collection.create({
				DESCRIPTION: description
			}, {wait: true});
		
		}
	},

	backToList: function () {
	    Backbone.history.navigate("", {trigger: true});
	}

});