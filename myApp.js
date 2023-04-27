let express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");

let app = express();

//Middleware

app.use(bodyParser.urlencoded({ extended: false }));
/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);
*/
// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

/*
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "Hello json".toUpperCase(),
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.send({
    echo: word,
  });
});

app.get("/name", (req, res) => {
  const { first: firstname, last: lastname } = req.query;
  res.json({
    name: `${firstname} ${lastname}`,
  });
});
*/

app.post("/name", (req, res) => {
  const { first: firstname, last: lastname } = req.body;
  //console.log(req.body);
  res.json({
    name: `${firstname} ${lastname}`,
  });
});

module.exports = app;
