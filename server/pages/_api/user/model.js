const db = require('../../../database')
const { Schema } = db

const schema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },

	firstName: { type: String },
	lastName: { type: String },

	created: { type: Date, default: Date.now },
	lastActive: { type: Date, default: Date.now }
})

module.exports = db.model('User', schema)