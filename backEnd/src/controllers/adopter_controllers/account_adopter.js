const Pet  = require('../../models/Pet');
const { getAllPets } = require('../../services/petServices');

const getListPets = async (req, res) => {
  try {
    const homePets = await getAllPets();
    if (!homePets || homePets.length === 0) {
      return res.status(404).send('No se encontraron mascotas disponibles');
    }
    console.log('Aquí la lista de mascotas disponibles', homePets);
    return res.status(200).json(homePets);
  } catch (error) {
    console.error('Error al obtener información', error);
    return res.status(500).send('Ocurrió un error al obtener información');
  }
};

const getSinglePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findByPk(id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    return res.status(200).json(pet);
  } catch (error) {
    console.error('Error al obtener la mascota:', error);
    return res.status(500).send('Ocurrió un error al obtener la mascota');
  }
};

module.exports = { getListPets, getSinglePet };