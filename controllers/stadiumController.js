const Stadium = require("../models/Stadium");
const factory = require("./handlerFactory");

exports.createStadium = factory.createOne(Stadium);
