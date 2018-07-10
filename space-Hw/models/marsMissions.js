// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA14156-1920x1200.jpg"
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.jpl.nasa.gov/missions/web/mer.jpg"
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.jpl.nasa.gov/missions/web/mgs.jpg"
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.jpl.nasa.gov/missions/web/pathfinder.jpg"
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: "https://www.jpl.nasa.gov/missions/web/viking.jpg"
  }
];

module.exports = marsMissions;