// routes/adoptionRequestRoutes.js
const express = require('express');
const { requestAdoption } = require('../controllers/adopter_controllers/adoptionRequestController');

const router = express.Router();

router.post('/adoption/request', requestAdoption);

module.exports = router;
