
// import express and templating engine
const express = require("express")
const exphbs = require("express-handlebars")

// import the http request library
const http = require("http")

// create application server
const app = express()

// configure all the templating and public styles
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// make express use the public folder 
app.use(express.static('public'))

app.get('/index', function (req, res) {

	// request code here
	res.render('home', {price: 20})
})

// listen in on port 3000 for incoming requests
app.listen(3000, function() {

    // alert the client that magic happens on port 3000
    console.log("magic happens on port 3000...")
})

