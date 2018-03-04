const createModel = require(`${process.cwd()}/database/create-model`)
const User = require(`${process.cwd()}/database/models/user`)

module.exports = createModel({
	name: 'field',
	struct: {
		name: String,

		options: { type: Object },
		value: { type: String, default: '' },

		created: { type: Date, default: Date.now },
		updated: { type: Date, default: Date.now },

		createdBy: { type: User },
		updatedBy: { type: User }
	}
})