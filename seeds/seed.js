const db = require('../config/connection');
const { User, Ship } = require('../models');
const userData = require('../seeds/userData.json');
const solasData = require('./solasData.json');




db.once("open", async () => {
  try {
   await User.deleteMany({});
  await Ship.deleteMany({});
   await User.create(userData);
   await Ship.create(solasData);
 
    console.log("All Done!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1); 
  }
});



