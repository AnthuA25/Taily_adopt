const { initResponse } = require("../helper");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const createAnUser = async (data) => {
  const res = initResponse();

  const { email, password, rol, phone, name } = data;
  if (!email || !password || !rol || !phone || !name) {
    res.error = "Required fields are missing";
    return res;
  }

  const userId = await User.findOne({ where: { email } });
  if (userId) {
    res.error = "User already exists";
    return res;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userCreated = await User.create({ ...data, password: hashedPassword });

  res.success = true;
  res.data = userCreated;
  return res;
};

module.exports = {
  createAnUser,
};
