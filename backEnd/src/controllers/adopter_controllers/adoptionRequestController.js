// controllers/adoptionRequestController.js
const Pet = require('../../models/Pet');
const User = require('../../models/User'); // Asegúrate de tener el modelo de User
const { sendAdoptionRequestEmail } = require('../../services/emailAdoptionRequest')

const requestAdoption = async (req, res) => {
  const { userId, petId } = req.body;
  try {
    const pet = await Pet.findOne({ where: { pet_id: petId } });
    if (!pet) {
      return res.status(404).json({ message: 'No se encuentra la mascota seleccionada.' });
    }

    // Obtener información del rescatista de la mascota
    const owner = await User.findOne({ where: { user_id: pet.user_id } });
    if (!owner) {
      return res.status(404).json({ message: 'Propietario de la mascota no encontrado.' });
    }

    // Obtener información del adoptante
    const adopter = await User.findOne({ where: { user_id: userId } });
    if (!adopter) {
      return res.status(404).json({ message: 'Adoptante no encontrado.' });
    }

    // Información para el correo
    const emailData = {
      adopterName: adopter.name,
      adopterEmail: adopter.email,
      adopterPhone: adopter.phone,
      ownerName: owner.name,
      ownerEmail: owner.email,
      ownerPhone: owner.phone,
      petName: pet.name,
    };

    // Enviar correos a adoptante y propietario
    await sendAdoptionRequestEmail(emailData);

    return res.status(200).json({ message: 'Solicitud de adopción enviada exitosamente.' });
  } catch (error) {
    console.error('Error al procesar la solicitud de adopción:', error);
    return res.status(500).json({ message: 'Error al procesar la solicitud de adopción.' });
  }
};

module.exports = { requestAdoption };
