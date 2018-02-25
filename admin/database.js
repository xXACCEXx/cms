const Database = require('warehouse')

let db = new Database({
	version: 1,
	path: './admin/warehouse.json'
})

db.save()

module.exports = db;