const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticated } = require("../middleware");


router.get("/", isAuthenticated, (req, res) => res.send(`Hola soy el user ${req.user.user_id}`))
router.post('/', userController.createUser)

module.exports = router;
