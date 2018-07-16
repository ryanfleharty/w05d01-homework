const express = require('express');
const app = express();

const Fruits = require('./models/fruits.js');

// Index route should send the whole array >>> listen for GET request
app.get('/', (req,res) => {
	res.render('index.ejs', {
		fruits: Fruits
	});

	
});





//The SHOW ROUTE --> This route always shows one item form the model
app.get('/fruits/:index', (req, res) => {
	/*console.log(req.params);
	res.send(Fruits[req.params.index])
	res.send(Fruits);*/

	//Render is when you want to send
	//an ejs template to the client - this is where we are showing the form on the page
	res.render('show.ejs', {
		//RENDER compiles EJS to HTML
	fruit: Fruits[req.params.index] //THis creates
	// a "fruit" variable in the SHOW page
});
});




app.listen(3001, () => {
	console.log('listening on port 3001 ok?');
});

