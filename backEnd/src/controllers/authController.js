const { loginUser } = require("../services/authServices");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const login = await loginUser(email, password);
    if (!login.success) {
        res.status(400).json(login)
        return
    }

    res.status(200).json(login)
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ success: false, error: "Internal error server" });
  }
};

module.exports = { signIn }