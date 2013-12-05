todoApp.Views.AddTodo = Backbone.Marionette.ItemView.extend({

    tagName:    'div',
    className:  'addTodo',

	template: _.template('<p><input type="text" id="description" class="input" placeholder="Todo" autofocus></p><p><button id="addBtn" class="btn">Save</button></p><p><button id="backBtn" class="btn">Back</button></p>'),

	initialize: function () {
		this.render();
	},

	onRender: function () {
		$('.todoApp').html(this.$el.fadeIn(500));
	},

	events: {
	    'click #addBtn':    'addTodo',
	    'click #backBtn':   'backToList'
	},

	addTodo: function () {

		var description = $('#description').val();

		if (description) {

			this.collection.add({
				description: description
			});

			Backbone.history.navigate("", {trigger: true});
		}
	},

	backToList: function () {
	    Backbone.history.navigate("", {trigger: true});
	}

});