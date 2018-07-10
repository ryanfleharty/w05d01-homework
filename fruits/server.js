
const express = require("express");

const app = express();

// require our model. models should be capitalized
const Fruits = require("./models/fruits.js")

// creating the index route
// index route should show all the fruits
app.get("/fruits", (req, res) => {
	res.render("index.ejs",{fruitsList: Fruits});
});

// what were trying to do is go to localhost/3000/fruits/0 --- apples /1 --- banana ...
// we are going to use query parameters to act like a variable which can be sent over by the client
// whatever is written after colon acts like a parameter variable
//this is called routing (express routing)

// this is the show route. always shows one item from the model
app.get("/fruits/:index", (req, res) => {
	// render is when you want to send an ejs template to a client
	res.render("show.ejs", { 
		fruit: Fruits[req.params.index] //this creates a "fruit" variable in the show page
	})
});



app.listen(3000, () => {
	console.log("i am listening at port 3000");
});
