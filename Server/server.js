import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

con.connect(function (err) {
  if (err) {
    console.log("Error connecting");
  } else {
    console.log("Connected successfully");
  }
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users Where email = ? AND password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) res.json(Error, "Error executing query");
    if (result.length > 0) {
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or  Password" });
    }
  });
});

app.listen(8081, () => {
  console.log("Running");
});
