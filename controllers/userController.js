const User = require("../models/User");
const factory = require("./handlerFactory");

exports.getAllUsers = factory.getAll(User);
