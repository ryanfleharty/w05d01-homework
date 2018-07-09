const express = require('express');
const app = express();

const superheroes = [
	[{name: "batman",
	powers: ['batmobile', 'heavy-armor', 'bat-a-rang'],
	city: "gotham"}],
	[{name: "superman",
	powers: ['x-ray vision', 'flight', 'ice-breath'],
	city: "metropolis"}],
	[{name: "hulk",
	powers: ['super-strength', 'rage', 'hulk-smash'], 
	city: "dayton"}],
	]

app.get('/', (req, res) => {
	res.send(superheroes);
})

app.get('/superheroes/:index', (req, res) => {
	res.send(superheroes[req.params.index]);
})







app.listen(3000, () => {
	console.log("Here to save the day...");
})