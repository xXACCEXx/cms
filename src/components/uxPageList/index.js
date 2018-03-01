var ractive = require('ractive/ractive.min')
var template = require('./temp.hbs')

module.exports = ractive.extend({
	template: template,

	data: function () {
		var o = {
			root: {
				_id: 0,
				name: 'Root Page',
				children: []
			}
		}

		for(var i = 0; i < 25; i++){
			o.root.children.push({
				_id: i+1,
				name: 'Item ' + (i + 1)
			})
		}

		return o;
	},

	selected: function (id) {
		if (id == window.hash.slice(1)) return true;
		return false;
	},

	oncomplete: function () {
		console.log('uxPageList: done')
	}
})