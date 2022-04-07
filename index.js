const express = require("express");
require("dotenv").config();
var mysql = require("mysql");

const app = express();
const port = process.env.PORT || 8080;

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

let connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  connection.query("select * from location", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
