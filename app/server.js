const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./models");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");

//sid.signature
const sessionStore = new MongoStore({
  mongoUrl: db.url,
  collection: "sessions",
});
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "basbhbfjkbhvkeyhbjhvjkehbfbsjf123423452#$$^#%^$&^% ",
    cookie: {
      sameSite: "strict",
      expires: new Date(Date.now() + 1 *24 * 60 * 60 * 1000),
    },
    rolling: true,
    store: sessionStore,
  })
  );
var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400,
};
app.use(cors(corsOptions, { origin: true, credentials: true }));
//  requests of content-type - application/json

db.mongoose
.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
  useFindAndModify: false
})
.then(() => {
  console.log("Connected to the database!");
})
.catch((err) => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

require("./routes/auth.routes")(app);
// set port, listen for requests
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports.sessionStore = sessionStore;
