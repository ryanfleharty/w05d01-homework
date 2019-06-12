const express = require('express');

const app = express();

// require our Model
// The model should be capitalized
const Fruits = require('./models/fruits');

// Creating the index route
// index route should show all the fruits

// app.get('/', (request, response) => {
// 	response.send('Hello. It\'s me. - Adele');
// })

app.set("view engine", "ejs");
app.get('/fruits', (req, res) => {
	res.render('index.ejs', {"fruitsList":Fruits});
});

// we are going to use query params to act like a variable which can be sent over by the client

// app.get('/fruits/:index', (req, res) => {
//     console.log(req.params);
//     res.send(fruits);
// })

// Show Route
app.get('/fruits/:index', (req, res) => {
	res.render('show.ejs', {fruit: Fruits[req.params.index]})
})

app.listen(3000, () => {
	console.log("I am listening at port 3000");
})