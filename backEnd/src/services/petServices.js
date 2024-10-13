const Pet = require("../models/Pet");

const getAllPets = async () => {
  try {
    const getList = await Pet.findAll();
    return getList;
  } catch (error) {
    console.error('Error al obtener la lista de mascotas:', error);
    throw new Error('Error al obtener la lista de mascotas');
  }
};

const getSinglePet = async (pet_id) => {
  try {
    const pet = await Pet.findByPk(pet_id);
    if (!pet) {
      throw new Error('Pet not found');
    }
    return pet;
  } catch (error) {
    console.error('Error al obtener la mascota:', error);
    throw new Error('Error al obtener la mascota');
  }
};



module.exports = { getAllPets, getSinglePet };