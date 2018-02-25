const database = require('../database')

class Model {
	constructor(name, struct) {
		this.__model = database.model(name, struct)
	}

	insert(data) {
		var chain = this.__model.insert(data)
			.then(() => database.save())
			.then(() => data)

		return chain;
	}

	getID(id) {
		return this.__model.findById(id)
	}

	find(queryObj) {
		return this.__model.find(queryObj)
	}
}

module.exports = Model