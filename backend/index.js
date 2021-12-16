const express = require("express");
const env = require("./config/envConfig")
const connect = require("./config/db")
const app = express();

// database connection
connect();

app.get("/", (req, res) => {
      res.json({msg: 'Welcome to chawkbazar'});
});

const port = env.PORT || 5000;

app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
});