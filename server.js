const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({
  path: "./config/config.env",
});
const authRoutes = require("./routes/auth");
const classRoutes = require("./routes/classroom");
let session = require("express-session");

//app
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  session({
    secret: process.env.TOKEN_SECRET,
    resave: true,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8 hours
    saveUninitialized: true,
  })
);

// db
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

//middlewares
app.use(cors());

//routes middleware
app.use("/api", authRoutes);
app.use("/classroom", classRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
