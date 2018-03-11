const db = require('../../../database')
const { Schema } = db

const schema = new Schema({
	key: String,
	value: Object
})

schema.virtual('toString', () => {
	return JSON.stringify(value)
})

module.exports = db.model('Input', schema)