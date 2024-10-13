// routes/adoptionRequestRoutes.js
const express = require('express');
const { requestAdoption } = require('../controllers/adopter_controllers/adoptionRequestController');
const { isAuthenticated } = require('../middleware');

const router = express.Router();

router.post('/request',isAuthenticated, requestAdoption);

module.exports = router;
