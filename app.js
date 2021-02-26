const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const userRouter = require("./routes/userRoutes");
const stadiumRouter = require("./routes/stadiumRoutes");
const clubRouter = require("./routes/clubRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/stadiums", stadiumRouter);
app.use("/api/v1/clubs", clubRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
