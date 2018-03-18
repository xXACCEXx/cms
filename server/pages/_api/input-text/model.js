const db = require('../../../database')
const { Schema } = db

const User = require('../user/model')

const schema = new Schema({
	name: String,

	options: { type: Options },
	value: { type: String, default: '' },

	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },

	createdBy: { type: User },
	updatedBy: { type: User }
})

// const createModel = require(`${process.cwd()}/database/create-model`)
// const User = require(`${process.cwd()}/database/models/user`)
// const Options = require('./model.options')

module.exports = db.model('TextInput', schema)