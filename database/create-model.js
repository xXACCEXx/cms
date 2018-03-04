const database = require('.')

module.exports = (options) => {
	if (!options.name) throw new Error('options must contain a name for the model')
	if (!options.struct) throw new Error('options must contain a struct for the model')

	var self = {
		model = database.model(options.name, options.struct)
	}

	self.insert = data => {
		var chain = this.model.insert(data)
			.then(() => database.save())
			.then(() => data)

		return chain;
	}

	self.getID = id => this.model.findById(id)

	self.find = queryObj => this.model.find(queryObj)

	var keys = Object.keys(options)
		.filter(k => k != 'name' && k != 'struct')
		.forEach(k => self[k] = options[k]);

	return k
}