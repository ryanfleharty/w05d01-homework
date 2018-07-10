const express = require('express');
const app = express();

const superheros = [
{ name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']},
{ name: "poisonivy", powers: ['seduction', 'invulnerability', 'poisoness skin']} 
] 


app.get("/superheros/:index", (req, res) => {
	res.send(superheros[req.params.index]);
})

app.listen(3000, () => {
	console.log("Loud and Clear");
});