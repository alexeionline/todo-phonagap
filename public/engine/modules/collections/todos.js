todoApp.Collections.Todos = Backbone.Collection.extend({

	url: 'http://ziostlabs.com/rest/todoapi/todos/',

	model: todoApp.Models.Todo,

	initialize: function () {	
		this.fetch({reset: true});
	}

})