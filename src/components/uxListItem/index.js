var ractive = require('ractive/ractive.min')
var template = require('./temp.hbs')

module.exports = ractive.extend({
	template: template,

	data: function () {
		return {}
	},

	oncomplete: function () {
		console.log('test')
	}
})