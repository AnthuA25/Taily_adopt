const express = require('express');
const { updatePet } = require('../controllers/adopter_controllers/updateController');

const router = express.Router();

// Ruta para actualizar la información clínica de la mascota
router.put('/:pet_id', updatePet);

module.exports = router;
