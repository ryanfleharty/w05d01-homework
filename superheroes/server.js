const express = require('express');

const app = express();

const superheroes = [
{
	name:'batman',
	powers:['genius intellect', 'physical prowess'],
},
{
	name:'superman',
	powers: ['flight', 'invulnerability', 'x-ray vision'],
},
{
	name:'hulk',
	powers: 'superhuman strength',
},
];

app.get('/superheroes', (req, res) => {
	res.send(superheroes);
})

app.get('/superheroes/:index', (req, res) => {
	res.send(superheroes[req.params.index]);
})

app.listen(3000, () => {
	console.log("Here to save the day");
})