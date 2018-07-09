const express = require('express');
const app = express();
const port = 3000;

const superheroes = [
  { 
    name: "superman", 
    powers: ['flight', 'invulnerability', 'x-ray vision']
  }, {
    name: "batman",
    power: ['lots of money']
  }, {
    name: "hulk",
    power: ['finesse', 'calm demeanor']
  }
]

app.get('/superheroes', (req, res) => {
  res.send(superheroes);
})

app.get('/superheroes/:index', (req, res) =>{
  res.send(superheroes[req.params.index]);
})

app.listen(3000, () =>{
  console.log("Here to save the day.  In port" + port);
  
})