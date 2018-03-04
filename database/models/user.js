const Model = require('../classes/model')

class User extends Model {
	constructor() {
		super('interfaces', {
			username: { type: String, required: true },
			password: { type: String, required: true },
			
			firstName: { type: String },
			lastName: { type: String },

			created: { type: Date, default: Date.now },
			lastActive: { type: Date, default: Date.now }
		})
	}
}

module.exports = new User()