const express = require("express");
const dotenv = require("dotenv");
const userRoute =  require('./routes/userRoutes');

// Model
const User = require("./model/userModel");

// EXPRESS VAR
const app = express();

// config of dotenv
dotenv.config();

// PORT ENV
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// MODEL CREATION
User.sync({ alter: true });

// TEMPLATE ENGINIEN SET UP
app.set("view engine", "ejs");

// ======== ROUTES middleware===========
app.use('',userRoute)


app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
