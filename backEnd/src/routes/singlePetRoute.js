const express = require('express');
const router = express.Router();
const { getSinglePet } = require('../controllers/adopter_controllers/account_adopter');
//const authenticateToken = require('../middleware/authMiddleware'); // Middleware for token verification



// Route to get a single pet by ID, requires a token for access
router.get('/:id', getSinglePet);

module.exports = router;
