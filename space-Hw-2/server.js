// DEPENDENCIES
const express = require('express');
const app = express();
const port = 3000;


const MarsMissions = require('./models/marsMissions');
// app.get('/', (req, res) => {
//   console.log(req.params);
//   res.send(MarsMissions);
// })
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server.


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/MarsMissions', (req, res) => {
  res.render('missions/index.ejs', {"marsMissionsList": MarsMissions});
});

// we are going to use query params to act like a variable which can be sent over by the client


// Show Route
app.get('/MarsMissions/:index', (req, res) => {
  res.render('missions/show.ejs', {MarsMissions: MarsMissions[req.params.index]})
})

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
