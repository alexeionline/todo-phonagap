todoApp.Models.Todo = Backbone.Model.extend({

	idAttribute: 'ID',

	urlRoot: 'http://ziostlabs.com/rest/todoapi/todos/',

	initialize: function () {
		this.listenTo(this, 'removeItem',   this.removeItem);
		this.listenTo(this, 'toggleStatus', this.toggleStatus);
	},

	toggleStatus: function () {
		this.save({
			ISDONE: !this.get('ISDONE')
		}, {patch: true, wait: true});
	},

	removeItem: function () {
		this.destroy();
	}

});