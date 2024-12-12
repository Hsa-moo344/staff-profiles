const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "mumu",
  password: "123456789",
  database: "admindb",
});

// Home route
app.get("/home", (req, res) => {
  res.send("This is my home page");
});

// Save staff function
app.post("/savefunction", (req, res) => {
  const { staffName, staffGender, staffPosition, staffDepartment } = req.body;

  const sql =
    "INSERT INTO tbl_admin (staffName, staffGender, staffPosition, staffDepartment) VALUES (?, ?, ?, ?)";
  pool.query(
    sql,
    [staffName, staffGender, staffPosition, staffDepartment],
    (err) => {
      if (err) {
        console.error("Failed to insert record:", err);
        return res.status(500).send("Failed to insert record");
      }
      console.log("1 record inserted");
      res.send("Insert OK");
    }
  );
});

// Get staff data
app.get("/getStaffData", (req, res) => {
  const sql = "SELECT * FROM tbl_admin";
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Failed to fetch data:", err);
      return res.status(500).send("Failed to fetch data");
    }
    console.log("All data fetched");
    res.json(results);
  });
});

// Edit staff function
app.put("/editfunction/:id", (req, res) => {
  const { id } = req.params;
  const { staffName, staffGender, staffPosition, staffDepartment } = req.body;

  const sql =
    "UPDATE tbl_admin SET staffName = ?, staffGender = ?, staffPosition = ?, staffDepartment = ? WHERE id = ?";
  pool.query(
    sql,
    [staffName, staffGender, staffPosition, staffDepartment, id],
    (err) => {
      if (err) {
        console.error("Failed to edit the data:", err);
        return res.status(500).send("Failed to edit the data");
      }
      console.log("Record updated successfully");
      res.send("Update OK");
    }
  );
});

// Delete staff function
app.delete("/deletefunction/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM tbl_admin WHERE id = ?";
  pool.query(sql, [id], (err) => {
    if (err) {
      console.error("Failed to delete the data:", err);
      return res.status(500).send("Failed to delete the data");
    }
    console.log("Record deleted successfully");
    res.send("Delete OK");
  });
});

// Login function
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM tbl_user WHERE username = ?";
  pool.query(sql, [username], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    const user_id = result[0].user_id;
    const sql2 =
      "SELECT user_id, username, email, role FROM tbl_user WHERE password = ? AND user_id = ?";
    pool.query(sql2, [password, user_id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
      if (result.length === 0) {
        return res.status(401).send("Invalid password");
      }
      console.log("Login success");
      res.status(200).json({ status: 200, data: result });
    });
  });
});

// Save attendance data
app.post("/attendancefunction", (req, res) => {
  const {
    username,
    gender,
    email,
    departments,
    organization,
    meetingtitle,
    venue,
    date,
    facilitator,
    signature,
  } = req.body;

  const sql =
    "INSERT INTO admindb.tbl_attendance (username, gender, email, departments, organization, meetingtitle, venue, date, facilitator, signature) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  pool.query(
    sql,
    [
      username,
      gender,
      email,
      departments,
      organization,
      meetingtitle,
      venue,
      date,
      facilitator,
      signature,
    ],
    (err) => {
      if (err) {
        console.error("Failed to submit record:", err);
        return res.status(500).send("Failed to submit record");
      }
      console.log("1 record inserted");
      res.send("Insert OK");
    }
  );
});

// Get attendance data
app.get("/AttendanceData", (req, res) => {
  const sql = "SELECT * FROM admindb.tbl_attendance";
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Failed to fetch data:", err);
      return res.status(500).send("Failed to fetch data");
    }
    console.log("All attendance data fetched");
    res.json(results);
  });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
