const Model = require('../core/model.class')

class Interface extends Model {
	constructor() {
		super('interfaces', {
			name: String,
			created: { type: Date, default: Date.now }
		})
	}

	findName(name) {
		return this.find({ name: name })
	}
}

module.exports = new Interface()