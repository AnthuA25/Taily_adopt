const { Pet, FollowUp } = require('../../models');

const updatePetFollowUp = async (req, res) => {
  const { pet_id } = req.params;
  const { clinical_comment, follow_up_date, next_follow_up_date, status } = req.body;

  try {

    const pet = await Pet.findByPk(pet_id);

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    const updatedFollowUp = await FollowUp.create({
      clinical_comment,
      follow_up_date,
      next_follow_up_date,
      status,
      pet_id,
      created_by: req.user.id, 
    });

    res.status(200).json({
      message: 'Pet follow-up updated successfully',
      data: updatedFollowUp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating follow-up information' });
  }
};

module.exports = { updatePetFollowUp };
