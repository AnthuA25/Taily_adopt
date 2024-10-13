const { Pet, FollowUp } = require('../models');

const updatePetInfo = async (req, res) => {
  const { pet_id } = req.params;
  const { clinical_comment, follow_up_date, next_follow_up_date, status } = req.body;

  try {
    const pet = await Pet.findByPk(pet_id);

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    // Creando un updated record
    const updatedInfo = await FollowUp.create({
      clinical_comment,
      follow_up_date,
      next_follow_up_date,
      status,
      pet_id,
    });

    res.status(200).json({
      message: 'Pet information updated successfully',
      data: updatedInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating pet information' });
  }
};

module.exports = { updatePetInfo };  // <---- Fix the export here

