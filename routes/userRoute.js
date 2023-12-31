const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const newUser = new UserModel({ ...req.body, verified: true });
    await newUser.save();
    res.send("User registered successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    });
    if (user) {
      res.send(user);
    } else {
      res.status(400).json({ message: "Login failed", user });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
