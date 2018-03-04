const createModel = require('../create-model')

module.exports = createModel({
	name: 'user',
	struct: {
		username: { type: String, required: true },
		password: { type: String, required: true },
		
		firstName: { type: String },
		lastName: { type: String },

		created: { type: Date, default: Date.now },
		lastActive: { type: Date, default: Date.now }
	}
})