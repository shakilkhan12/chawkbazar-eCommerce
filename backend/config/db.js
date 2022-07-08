const mongoose = require("mongoose");
const env = require("./envConfig");
const connect = async () => {
  try {
    const ress = await mongoose.connect(env.URL, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("database connected!");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connect;
