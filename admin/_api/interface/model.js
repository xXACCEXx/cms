const db = require('../../../database')
const { Schema } = db

const schema = new Schema({
	name: String,
	created: { type: Date, default: Date.now }
})

module.exports = db.model('Interface', schema)