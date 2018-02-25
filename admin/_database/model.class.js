const db = require('./db')

class Model {
	constructor(name, struct) {
		this.__model = db.model(name, struct)
	}

	insert(data) {
		this.__model.insert(data)
		return this.db.save()
	}

	getID(id) {
		return this.__model.findById(id)
	}

	find(queryObj) {
		return this.__model.find(queryObj)
	}
}

module.exports = Model