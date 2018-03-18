const db = require('../../../database')
const { Schema } = db

const schema = new Schema({
	content: String,

	updated: { type: Date, default: Date.now },
	created: { type: Date, default: Date.now },

	lastEditBy: { type: User.__model, required: true },
	owner: { type: User.__model, require: true }
})

module.exports = db.model('Markdown', schema)