const createModel = require('../create-model')

module.exports = createModel({
	name: 'interfaces',
	struct: {
		name: String,
		created: { type: Date, default: Date.now }
	},

	findName: name => this.model({ name: name })
})