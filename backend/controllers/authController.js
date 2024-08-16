const { get } = require("mongoose");
const UserDetails = require("../models/UserModel");

const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const existingUser = await UserDetails.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new UserDetails({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserDetails.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "User signed in successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserData = async (req, res) => {
  const { email } = req.body;
  const user = await UserDetails.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { password, ...userData } = user.toObject();
  res.status(200).json(userData);
};

module.exports = {
  signUp,
  signIn,
  getUserData,
};
