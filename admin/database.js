const Database = require('warehouse')

let db = new Database({
	version: 1,
	path: './admin/warehouse.json'
})

db.load()

module.exports = db;