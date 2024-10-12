const { createAnUser } = require("../services/userServices");

const createUser = async (req, res) => {
  try {
    const newUser = await createAnUser(req.body);
    if (!newUser.success) {
      res.status(400).json(newUser);
      return;
    }
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ sucess: false, error: "error registering user" });
  }
};

module.exports = { createUser };
