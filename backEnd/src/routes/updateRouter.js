const express = require('express');
const router = express.Router();
const { updatePet } = require('../controllers/adopter_controllers/updateController');



// Ruta para actualizar la información clínica de la mascota
router.put('/pets/:pet_id', updatePet);

module.exports = router;
