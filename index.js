const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var mysql = require("mysql");
require("dotenv").config();

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

let connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  connection.query("SELECT * FROM location", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
