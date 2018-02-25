const Database = require('warehouse')

let db = new Database({
	version: 1,
	path: './data.json'
})

db.save()

module.exports = db;