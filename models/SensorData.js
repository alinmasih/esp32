const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  mq135: Number,
  mq7: Number,
  mq2: Number,
  sound: Number,
  turbidity: Number,
  location: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("SensorData", sensorSchema);