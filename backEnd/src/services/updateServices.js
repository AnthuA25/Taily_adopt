const Pet = require('../models/Pet');
const FollowUp = require('../models/FollowUp');

const findPetById = async (pet_id) => {
  return await Pet.findByPk(pet_id);
};

const createFollowUpRecord = async (followUpData) => {
  return await FollowUp.create(followUpData);
};

const updatePetInfo = async (pet_id, followUpData) => {
  const pet = await findPetById(pet_id);
  if (!pet) {
    throw new Error('Pet not found');
  }

  return await createFollowUpRecord({ ...followUpData, pet_id});
};

module.exports = { updatePetInfo };
