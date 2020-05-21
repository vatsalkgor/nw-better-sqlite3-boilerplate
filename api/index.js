const sqlite3 = require("sqlite3");

sqlite3.Database("../customeronly1.database", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});
