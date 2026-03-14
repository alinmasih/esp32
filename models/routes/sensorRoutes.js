const express = require("express");
const router = express.Router();
const SensorData = require("../models/SensorData");

router.post("/sensor-data", async (req, res) => {

  const data = new SensorData(req.body);

  await data.save();

  res.json({
    message: "Data stored successfully"
  });

});

module.exports = router;
