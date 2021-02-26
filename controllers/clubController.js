const Club = require("../models/Club");
const factory = require("./handlerFactory");

exports.createClub = factory.createOne(Club);
