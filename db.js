const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Mongo is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
