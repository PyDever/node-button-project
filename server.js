
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

app.get('/', function (req, res) {

	var bitcoinUnitPrice = new Number()

	// url for the GET request
	var url = "https://api.coindesk.com/v1/bpi/currentprice.json"

	http.get(url, function (response) {
		response.setEncoding('utf-8')
        var body = ''
        response.on('data', function(d) {
            body += d
        })

        response.on('end', function(){
            var parsed = JSON.parse(body)

            bitcoinUnitPrice = parsed.bpi.usd.rate
            res.render('home', {price: bitcoinUnitPrice})
         })
	})
})

// listen in on port 3000 for incoming requests
app.listen(3000, function() {

    // alert the client that magic happens on port 3000
    console.log("magic happens on port 3000...")
})

