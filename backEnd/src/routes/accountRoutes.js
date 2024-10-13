const express = require('express');

const { getListPets } = require('../controllers/adopter_controllers/account_adopter');

const router = express.Router();

router.get('/', getListPets);

module.exports = router;
