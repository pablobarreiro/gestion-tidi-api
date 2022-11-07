const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const LocalStrategy = require("passport-local");
const { User } = require("./models/User");
const db = require('./db')
const routes = require("./routes");
// require("dotenv").config({ path: ".env" });

const app = express();

const corsOptions = { origin: process.env.CLIENT_BASE_URI };
app.use(cors(corsOptions));

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PASSPORT
  // cookies
  app.use(cookieParser());
  app.use(expressSession({ secret: "superTopTMDB" }));
  // passport init
  app.use(passport.initialize());
  app.use(passport.session());
  // estrategia local
  passport.use(
    new LocalStrategy({}, (username, password, done) => {
      User.findOne({ where: { username: username.toLowerCase() } })
        .then((user) => {
          if (!user) done(null, false);
          if (user.validatePassword(password)) done(null, user);
          else done(null, false);
        })
        .catch((err) => done(err, false));
    })
  );
  // serialize
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  // deserialize
  passport.deserializeUser(function (id, done) {
    User.findByPk(id).then((user) => done(null, user));
  });

app.use("/api", routes);

const port = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
