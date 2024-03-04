const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

app.use(bodyParser.json());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

module.exports = app;
