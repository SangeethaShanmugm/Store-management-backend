const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/userRoute");
const billRoute = require("./routes/billRoutes");
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome🥳");
});

app.use("/items", itemsRoute);
app.use("/users", usersRoute);
app.use("/bills", billRoute);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose is connected");
    app.listen(PORT, () => console.log("Server listening on port", PORT));
  })
  .catch((error) => {
    console.log(error);
  });
