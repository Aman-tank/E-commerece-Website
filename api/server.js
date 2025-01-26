const express = require("express");
const server = express();
const cors = require("cors");
const apiRouter = require("./routes/api");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/login_project")
  .then(() => {
    console.log("DB successfully connected");
  })
  .catch((error) => {
    console.log(error);
  });

server.use(cors());  
server.use(express.json());
server.use("/api", apiRouter);

const port = 5000;
server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
