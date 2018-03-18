const express = require('express')
let app = express()

//	static assets
app.use('/css', express.static('./public/css'))
app.use('/js', express.static('./public/js'))
app.use('/fonts', express.static('./public/fonts'))


app.use('/', require('./pages/route'))

app.get('/', (req, resp) => {
	resp.redirect('/admin/elements')
})

app.get('*', (req, resp) => {
	resp.statusCode = 404;
	resp.send('404 lol')
})

app.listen(8080)
console.log('Listening to:', 'http://localhost:8080/')

module.exports = app;