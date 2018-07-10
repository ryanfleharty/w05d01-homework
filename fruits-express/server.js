const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

const Fruits = require('./models/fruits');

// middleware - bodyParser allows for reading the content or body of a request
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// Index. Show all the fruits
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {"fruitsList":Fruits});
  // res.send(Fruits);
});

// Route that the form sends info to
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruits.push(req.body);
  res.redirect('/fruits');
});

app.delete('/fruits/:id', (req, res) => {
  Fruits.splice(req.params.id, 1);
  res.redirect('/fruits');
})

// New route - Shows the Form
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
});

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