const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./db");
const routes = require("./routes");
const morgan = require("morgan")
require("dotenv").config({ path: ".env" });

const app = express();

const corsOptions = { origin: process.env.CLIENT_BASE_URI };
app.use(cors(corsOptions));
app.use(morgan('combined'))
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

const port = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
