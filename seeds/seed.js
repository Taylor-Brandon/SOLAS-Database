const db = require("../config/connection");
const { User, SOLAS } = require("../models");
const userData = require("./userData.json");
const solasData = require('./solasData.json');

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await SOLAS.deleteMany({});
    await User.insertMany(userData);
    await SOLAS.insertMany(solasData);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});