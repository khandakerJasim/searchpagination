const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Errorhandler = require("./middleware/Error");
const router = require("./routes/Router");
const userrouter = require("./routes/usRouter");

const app = express();

//mongoose connnect

mongoose
  .connect("mongodb://127.0.0.1:27017/searchpagination")
  .then(() => console.log("mongoose connect successfully"))
  .catch((error) => console.log("error", error));

//cors setup
app.use(cors());

//bodyparser setup
app.use(Bodyparser.urlencoded({ extended: true }));
app.use(Bodyparser.json());

//dot env config
dotenv.config();

//routeruse

app.use(router);

//usrouteruse
app.use(userrouter);

//static folder use
app.use("/uploads", express.static("./uploads"));

//errorhandler
app.use(Errorhandler);

module.exports = app;
