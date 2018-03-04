const Model = require('../model.class')
const User = require('./user')

class Markdown extends Model {
	constructor() {
		super('markdown', {
			content: String,

			updated: { type: Date, default: Date.now },
			created: { type: Date, default: Date.now },

			lastEditBy: { type: User.__model, required: true },
			owner: { type: User.__model, require: true }
		})
	}
}

module.exports = new Markdown()