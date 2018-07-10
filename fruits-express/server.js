const express = require('express');
const app = express();

// require Our Model - Remember Model is
// a representation of our data
// The model should be capitalized
const Fruits = require('./models/fruits');


// Creating thr index route
// index route should show all the fruits
app.get('/fruits', (req, res) => {
	

	// res.send(Fruits)
    res.render('index.ejs', {
		fruit: Fruits[req.params.index]
	})
});

// Show route
app.get('/fruits/:index', (req, res) => {

	// Render is when you want to send
	// an ejs template to the client
	res.render('show.ejs', {
		fruit: Fruits[req.params.index] // This creates
		// a "fruit" variable in the show page
	})
});





app.listen(3000, () => {
	console.log('listening to port 3000');
});