const express = require('express');
const app = express();

const superheroes = [
	{
		name: "batman",
		powers:	['money', 'bats', 'deep voice']	
	},
	{
		name: "superman",
		powers: ['flight', 'invulnerability', 'x-ray vision']
	},
	{
		name: "hulk",
		powers: ['strength', 'rage', 'being green']
	}
]



app.get('/', (req, res) => {
	res.send('Here to save the day...')
});

// Routes
app.get('/superheroes', (req, res) => {
	res.send(superheroes)
})

app.get('/superheroes/:index', (req, res) => {
	res.send(superheroes[req.params.index])
})


app.listen(3000, () => {
	console.log('listening to port 3000');
});