const fs = require('fs')

const connection = {
	db: require('./db'),
	interfaces: require('./models/interface')
}

try {
	if (!fs.lstatSync('./data.json').isFile())
		throw 'nope';
}

catch (e) {
	fs.writeFileSync('./data.json', '')
}

module.exports = connection