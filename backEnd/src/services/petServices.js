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

module.exports = { getAllPets };
