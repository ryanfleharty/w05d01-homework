const express = require("express");

const app = express();

const superheroes = [
{name:'batman', powers: ["money", "alfred", "bat-skillz"]}, 
{name:'superman', powers: ["flight", "invulnerability", "lazer eyes"]}, 
{name:'hulk', powers: ["hulk-rage", "green camoflage", "fashion sense" }];

app.get("/superheroes", (req, res) => {
	res.send(superheroes);
});

app.get("/superheroes/:index", (req,res) => {
	res.send(superheroes[req.params.index]);
});







app.listen(3000, () => {
	console.log("here to save the day")
})