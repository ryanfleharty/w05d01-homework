const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const Fruits = require('./models/fruits');

// Index. Show all the fruits
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {"fruitsList":Fruits});
})

// Show one item
app.get('/fruits/:index', (req, res) => {
  res.render('show.ejs', { 
    fruit: Fruits[req.params.index]
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;