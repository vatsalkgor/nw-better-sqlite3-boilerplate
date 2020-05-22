const express = require("express");
const app = express();
const database = require("better-sqlite3");
const db = new database("customeronly1.database", { verbose: console.log });

app.get("/", (req, res) => {
  const rows = db.prepare("select * from login").all();
  return res.json(rows);
});
app.listen(4567, () => {
  console.log("started");
});
