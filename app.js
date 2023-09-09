// External import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// Internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();
//Mongoose connect
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Connection successfull"))
  .catch((err) => console.log(err));

//Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

// set static
app.use(express.static(path.join(__dirname, "public")));

//parse coockies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing set up
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 error Handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// Listening Port
app.listen(process.env.PORT, () => {
  console.log(`App listening at port ${process.env.PORT}`);
});
