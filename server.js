/**const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/prithvinet");

app.listen(5000, () => {
  console.log("Server running on port 5000");
});*/

/**const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/sensor-data", (req, res) => {

  console.log("Sensor Data Received:", req.body);

  res.json({
    message: "Sensor data received successfully",
    data: req.body
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});*/

/**const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/sensor-data", (req, res) => {

  console.log("Sensor Data Received:", req.body);

  res.json({
    message: "Sensor data received successfully",
    data: req.body
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

let latestSensorData = {};

app.post("/api/sensor-data", (req, res) => {

  latestSensorData = req.body;

  console.log("Sensor Data:", latestSensorData);

  res.json({
    message: "Data received",
  });

});

app.get("/api/latest-data", (req, res) => {

  res.json(latestSensorData);

});*/


const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let latestSensorData = {};   // store latest data

// POST route (ESP32 or Postman sends data)
app.post("/api/data", (req, res) => {

  latestSensorData = req.body;

  console.log("Sensor Data Received:", latestSensorData);

  res.json({
    message: "Data stored successfully"
  });

});

// GET route (dashboard reads data)
app.get("/api/data", (req, res) => {

  res.json(latestSensorData);

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});