require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");
const port = 8003;
//const port2 = 8080;
//const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("server start");
});

app.use(router);

app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});

// mongodb+srv://yash:jeeiit180@cluster0.ytbvfey.mongodb.net/mernstack?retryWrites=true&w=majority
