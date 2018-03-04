const Database = require('warehouse')

let db = new Database({
	version: 1,
	path: './database/warehouse.json'
})

db.load()

module.exports = db;