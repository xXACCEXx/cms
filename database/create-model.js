const database = require('./db')

var proto = {}

proto.insert = data => {
	var chain = this.model.insert(data)
		.then(() => database.save())
		.then(() => data)

	return chain
}

proto.getID = id => this.model.findById(id)

proto.find = queryObj => this.model.find(queryObj)

module.exports = (options) => {
	if (!options.name) throw new Error('options must contain a name for the model')
	if (!options.struct) throw new Error('options must contain a struct for the model')

	var self = Object.create(proto)
	self.model = database.model(options.name, options.struct)

	var keys = Object.keys(options)
		.filter(k => k != 'name' && k != 'struct')
		.forEach(k => self[k] = options[k]);

	return self
}