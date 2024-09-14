const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/home", (req, res) => {
  res.send("This is my home page");
});

// Save function route
app.post("/savefunction", (req, res) => {
  const { staffName, staffGender, staffPosition, staffDepartment } = req.body;

  const connection = mysql.createConnection({
    host: "localhost",
    user: "mumu",
    password: "123456789",
    database: "admindb",
  });

  connection.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      res.send("Database connection failed");
      return;
    }
    console.log("Connected to the database");

    const sql =
      "INSERT INTO tbl_admin (staffName, staffGender, staffPosition, staffDepartment) VALUES (?, ?, ?, ?)";
    connection.query(
      sql,
      [staffName, staffGender, staffPosition, staffDepartment],
      (err, results) => {
        if (err) {
          console.error("Failed to insert record:", err);
          res.send("Failed to insert record");
          return;
        }
        console.log("1 record inserted");
        res.send("Insert OK");
      }
    );
  });
});

// Get data from Database MySQL
app.get("/getStaffData", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "mumu",
    password: "123456789",
    database: "admindb",
  });

  connection.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      res.send("Database connection failed");
      return;
    }
    console.log("Connected to the database");

    const sql = "SELECT * FROM tbl_admin";
    connection.query(sql, (err, results) => {
      if (err) {
        console.error("Failed to fetch data:", err);
        res.send("Failed to fetch data");
        return;
      }
      console.log("All data was fetched");
      res.json(results);
    });
  });
});

// Edit Function
app.put("/editfunction/:id", (req, res) => {
  const { id } = req.params;
  const { staffName, staffGender, staffPosition, staffDepartment } = req.body;

  const connection = mysql.createConnection({
    host: "localhost",
    user: "mumu",
    password: "123456789",
    database: "admindb",
  });

  connection.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      res.send("Database connection failed");
      return;
    }
    console.log("Connected to the database");

    const sql =
      "UPDATE tbl_admin SET staffName = ?, staffGender = ?, staffPosition = ?, staffDepartment = ? WHERE id = ?";
    connection.query(
      sql,
      [staffName, staffGender, staffPosition, staffDepartment, id],
      (err, results) => {
        if (err) {
          console.error("Failed to edit the data:", err);
          res.send("Failed to edit the data");
          return;
        }
        console.log("Record updated successfully");
        res.send("Update OK");
      }
    );
  });
});
// delete function
app.delete("/deletefunction/:id", (req, res) => {
  // console.log("this is delete function");
  const { id } = req.params;
  const { staffName, staffGender, staffPosition, staffDepartment } = req.body;

  const connection = mysql.createConnection({
    host: "localhost",
    user: "mumu",
    password: "123456789",
    database: "admindb",
  });

  connection.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      res.send("Database connection failed");
      return;
    }
    console.log("Connected to the database");

    const sql = "delete from tbl_admin where id = ?";
    connection.query(sql, [id], (err, results) => {
      if (err) {
        console.error("Failed to delete the data:", err);
        res.send("Failed to delete the data");
        return;
      }
      console.log("Record updated successfully");
      res.send("delete OK");
    });
  });
});
// Login function
app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  let connection = mysql.createConnection({
    host: "localhost",
    user: "mumu",
    password: "123456789",
    database: "admindb",
  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the MySQL server.");
    var sql = "select * from tbl_admin where username = '" + username + "'";
    console.log("query : " + sql);
    connection.query(sql, function (err, result) {
      if (result.length > 0) {
        console.log(JSON.stringify(result));
        let connection = mysql.createConnection({
          host: "localhost",
          user: "mumu",
          password: "123456789",
          database: "admindb",
        });
        connection.connect(function (err) {
          if (err) throw err;
          console.log("Connected to the MySQL server.");
          var sql =
            "select user_id,staffName,email,role from tbl_admin where password = '" +
            password +
            "' and user_id = " +
            result[0].user_id;
          console.log("query : " + sql);
          connection.query(sql, function (err, result) {
            if (result.length > 0) {
              console.log("login success");
              // res.send(result);
              res.status(200).json({
                status: 200,
                data: result,
              });
            } else {
              res.send("Password invalid");
              console.log("Password invalid");
            }
            // res.send(result)
            if (err) throw err;
            // console.log("1 record inserted");
          });
        });
      } else {
        console.log("User Not Found!");
        res.send("User Not Found!");
      }

      if (err) throw err;
    });
  });
});

// Start the server
app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
