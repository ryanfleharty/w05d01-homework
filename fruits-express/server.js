const express = require('express');

const app = express();

// require our model
// the model name should be capitalized

const Fruits = require('./Models/fruits')

// creating the index route
// the index route should show all the fruits
app.get('/fruits', (req, res) => {
	res.render('index.ejs', {
		fruitList: Fruits
	});
});

// what we are trying to do
// localhost:3000/fruits/0 ----> apple

// we are going to use query params to act like a variable which can be sent over by the client

// The show route 

app.get('/fruits/:index', (req, res) => {
	// render is when you want to send an ejs template to the client
	res.render('show.ejs', {
		fruit: Fruits[req.params.index] //this creates a "fruit" variable in the show page
	})
})

app.listen(3000, () => {
	console.log('I am listening on port 3000');
});