const express = require("express");
const app = express();

app.get("/yoga-types", (req, res) => {
  res.json({
    yogaTypes: ["Hatha Yoga", "30 minute Yoga", "Stretch Yoga"],
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

//server will be running on port 5000
//client will be running on port 3000
