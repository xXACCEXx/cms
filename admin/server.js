const express = require('express')
let app = express()

app.use('/_api', require('./_api'))

app.get('/:interface/:page', (req, resp) => {
	resp.send(`Hello, you should probs go to '${req.params.interface}' section, and find the '${req.params.page}' page.`);
})

app.get('/', (req, resp) => {
	resp.redirect('/admin/panel')
})

app.get('*', (req, resp) => {
	resp.send('404 lol')
})

app.listen(8080)
console.log('Listening to:', 'http://localhost:8080/')

module.exports = app;