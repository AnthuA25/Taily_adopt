const { updatePetInfo } = require('../../services/updateServices');

// Controller for updating the pet's clinical information
const updatePet = async (req, res) => {
  try {
    // Call the service function directly, passing req and res
    await updatePetInfo(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error updating pet information' });
  }
};

module.exports = { updatePet };
