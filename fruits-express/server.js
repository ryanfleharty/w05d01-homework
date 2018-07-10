const express = require('express');
const app = express();

// require our Model- The model should be capitalized
const fruits = require("./models/fruits.js")

// Creating the index route
// index route should show all the fruits
// app.get("/fruits", (req, res) => {
// 	res.send(fruits)
// });

// what were trying to do
// localhost:3000/fruits/0 --> apple

// We are going to use query params
// to act like a variable which, can be sent over by the client


// The show route --> This route alwys show's one element of data from the model

// app.get("/fruits/:index", (req, res) => {
// // 	console.log(req.params, '<-- this is req.params');
// 	res.send(fruits[req.params.index]);
// })


app.get("/fruits/:index", (req, res) => {
// 	// Render is when you want to send an ejs template to the client
	res.render("show.ejs", {
		fruit: fruits[req.params.index]
// 		//This creates a "fruit" variable in the show page
	})
});



app.get("/fruits", (req, res) => {
	res.render("index.ejs",
	{"fruitsList":fruits});
})






app.listen(3000, () => {
	console.log("I am listening");
});

