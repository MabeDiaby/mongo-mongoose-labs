/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");
// console.log(seedData);
// Configuration
const mongoURI = "mongodb://localhost:27017/vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });

// Vampire.insertMany(seedData, 
//   [{
//     name: "Chocula Peter",
//     dob: new Date(1801, 3, 17, 14, 43),
//     eye_color: "green",
//     loves: ["books", "blood", "wine"],
//     location: "Paris, France",
//     gender: "f",
//     victims: 6030
//   },
//   {
//     name: "Damien Standbury",
//     dob: new Date(1906, 2, 18, 50, 3),
//     hair_color: "brown",
//     eye_color: "hazel",
//     loves: ["vodka", "fancy clothes", "dogs"],
//     location: "Salem, Massachusetts",
//     gender: "m",
//     victims: 36
//   },
//   {
//     name: "Selena Gomez",
//     dob: new Date(1605, 3, 13, 11, 3),
//     hair_color: "blue",
//     eye_color: "green",
//     loves: ["travel", "hats", "shopping"],
//     location: "Manhattan, New York",
//     gender: "f",
//     victims: 524
//   },
//   {
//     name: "James Bond",
//     dob: new Date(1007, 10, 3, 15, 4),
//     hair_color: "light brown",
//     eye_color: "green",
//     loves: ["drinking", "food", "suits", "fighting"],
//     location: "Manhattan, New York",
//     gender: "m",
//     victims: 524
//   }],
//   (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });

// Vampire.insertMany(seedData, 
  
//   (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });