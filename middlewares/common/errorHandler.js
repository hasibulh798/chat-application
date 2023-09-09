const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your Requested content was not found!"));
}

// defult error handler
function errorHandler(err, req, res, next) {
  //2nd data pathanor alternative hisabe local variable er maddhomeo pahtano jai
  // res.locals.title = "Error page";
  //ekhan theke data pathate chile 2nd parameter hisebe object pathate pari
  //   res.render(
  //     "error" /*, {
  //     title: "Error Page",
  //   }*/
  //   );
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    // html response
    res.render("error", {
      title: "Error page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
