const express = require('express');
const { updatePetFollowUp } = require('../controllers/adopter_controllers/updateController');

const router = express.Router();

// Ruta para actualizar la información clínica de la mascota
router.put('/update/:pet_id', updatePetFollowUp);

module.exports = router;
