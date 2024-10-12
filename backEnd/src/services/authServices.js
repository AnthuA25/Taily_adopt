const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { initResponse } = require("../helper");
const User = require("../models/User");

const loginUser = async (email, password) => {
  const res = initResponse();

  if (!email || !password) {
    res.error = "Invalid credentials";
    return res;
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.error = "Invalid credentials";
    return res;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.error = "Invalid credentials";
    return res;
  }

  const { user_id, rol, name } = user;
  const token = jwt.sign({ user_id, rol }, process.env.JWT_SECRET);
  
  res.success = true;
  res.data = { email, name, rol, token };
  return res;
};

module.exports = { loginUser }