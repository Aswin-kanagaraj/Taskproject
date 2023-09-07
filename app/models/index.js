const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
// db.profile = require("./journey.model.js")(mongoose);
db.url = dbConfig.url;

module.exports = db;
