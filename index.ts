const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const exjwt = require("express-jwt");

var port = process.env.PORT || 4000;

const app = express();

// Serve static files from the React app
if (process.env.NODE_ENV !== "development") app.use(express.static("client/build"));

if (process.env.NODE_ENV !== "development") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

var router = require("express").Router();

// Initialize body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// export const jwtMW = exjwt({
//   secret: process.env.JWT_SECRET,
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Setup route controllers
router.use("/auth", require("./src/routes/auth"));

// Initialize routes
app.use("/api", router);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file for prod.
if (process.env.NODE_ENV !== "development") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Start app
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
