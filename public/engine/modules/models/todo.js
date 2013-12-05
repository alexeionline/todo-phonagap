todoApp.Models.Todo = Backbone.Model.extend({

	initialize: function () {
		this.listenTo(this, 'removeItem',   this.removeItem);
		this.listenTo(this, 'toggleStatus', this.toggleStatus);
	},

	toggleStatus: function () {
		this.set({
			done: !this.get('done')
		});
	},

	removeItem: function () {
		this.destroy();
	}

});