// DEPENDENCIES
const express = require('express');
const Missions = require('./models/marsMissions');
const app = express();
const port = 3000;

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages



// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
app.get('/missions', (req, res) => {
  res.render('missions/index.ejs', { "missionsList": Missions });
})

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/missions/:id', (req, res) => {
  res.render('missions/show.ejs', {
    "mission": Missions[req.params.id]
  });
})


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
