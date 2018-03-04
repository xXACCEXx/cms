const createModel = require('../create-model')
const User = require('./user')

module.exports = createModel({
	name: 'markdown',
	struct: {
		content: String,

		updated: { type: Date, default: Date.now },
		created: { type: Date, default: Date.now },

		lastEditBy: { type: User.__model, required: true },
		owner: { type: User.__model, require: true }
	}
})