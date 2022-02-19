const express = require("express");
const env = require("./config/envConfig")
const cors = require("cors");
const connect = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes")
const app = express();

// database connection
connect();
app.use(cors())
// add middleware
app.use(express.json());

app.get("/", (req, res) => {
      res.json({msg: 'Welcome to chawkbazar'});
});
// user routes
app.use('/api', userRoutes);
app.use("/api", categoryRoutes);

const port = env.PORT || 5000;

app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
});