const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const mongoose = require("mongoose");
const roleRouter = require("./router/router");
const cors = require("cors");
const path = require("path");

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


// db connection
mongoose
  .connect("mongodb+srv://Mohamed:O0mTgZbnAHlGttUU@cluster0-74gf8.mongodb.net/roles?retryWrites=true&w=majority"
  , { useNewUrlParser: true })
  .then(() => {
    console.log("Connected To Database!")
  })
  .catch((error) => {
    console.log("Connection Faild!", error)
  })
server.use("/api/roles/", roleRouter);

// server.use(express.static("./views"));

// server.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./", "views", "index.html"));
// });
// server config and come to live
server.listen(3000, () => {
  console.log("Server is listening 🔥🔥🔥");
});