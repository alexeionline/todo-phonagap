todoApp.Models.Todo = Backbone.Model.extend({

	idAttribute: 'ID',

	initialize: function () {
		this.listenTo(this, 'removeItem',   this.removeItem);
		this.listenTo(this, 'toggleStatus', this.toggleStatus);
	},

	toggleStatus: function () {
		this.save({
			ISDONE: !this.get('ISDONE')
		}, {patch: true});
	},

	removeItem: function () {
		console.log(this);

		// this.destroy({complete: function(model, response) {
		// 	alerty(1);
		// }});
	}

});