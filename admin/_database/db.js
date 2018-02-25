const Database = require('warehouse')

let db = new Database({
	version: 1,
	path: './admin/_database/data.json'
})

db.save()

module.exports = db;