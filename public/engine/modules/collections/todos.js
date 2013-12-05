todoApp.Collections.Todos = Backbone.Collection.extend({

	//url: '/todos',

	model: todoApp.Models.Todo,

	initialize: function () {
	
		// this.fetch({
		// 	success: function (collection) {
		// 		collection.trigger('fetch:success')
		// 	}
		// });
		
	}

})