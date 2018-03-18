const db = require('../../../db')
const { Schema } = db

const schema = new Schema({
	name: String,
	created: { type: Date, default: Date.now }
})

module.exports = db.model('Interface', schema)