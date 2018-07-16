const express = require('express');
const app = express();

const superheroes = ["batman","superman","hulk"];

const hdSuperheroes = [
						{name: "batman",
						 mot: "batmobile",
						 powers: "I\'m Batman!"},

						{name: "superman",
						 mot: "flight",
						 powers: ['x-ray vision','invincible']
						},

						{name: "hulk",
						 mot: "brute force",
						 powers: ['see mot','green']
						}
					  ];


app.get('/', (req,res) => {
	res.send('Is anyone there..?')
})

app.get('/superheroes', (req,res) => {
	res.send(superheroes);
})

app.get('/superheroes/:id', (req,res) => {
	res.send(superheroes[req.params.id]);
})

app.get('/hd', (req,res) => {
	res.send(hdSuperheroes);
})

app.get('/hd/:index', (req,res) =>{
	res.send(hdSuperheroes[req.params.index].name);
})

app.get('/hd/:index/x', (req,res) => {
	res.send(`Name: ${hdSuperheroes[req.params.index].name} | Method of Transport: ${hdSuperheroes[req.params.index].mot} | Powers: ${hdSuperheroes[req.params.index].powers}`);
})

app.listen(3000, () => {
	console.log('Here to save the day...');
})