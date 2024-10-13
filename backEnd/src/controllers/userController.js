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

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error fetching user:", error.message);
    res.status(500).json({ message: "Error fetching user" });
  }
};

module.exports = { createUser, getUser };