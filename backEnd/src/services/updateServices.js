const { FollowUp } = require('../models');

// Lógica para actualizar seguimiento de mascotas
const updateFollowUpService = async (followUpData) => {
  try {
    const updatedFollowUp = await FollowUp.create(followUpData);
    return updatedFollowUp;
  } catch (error) {
    throw new Error('Error updating follow-up');
  }
};

module.exports = { updateFollowUpService };
