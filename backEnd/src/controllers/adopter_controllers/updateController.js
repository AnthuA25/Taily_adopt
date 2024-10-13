const { updatePetInfo } = require('../../services/updateServices');

// Controller for updating the pet's clinical information
const updatePet = async (req, res) => {
  const { pet_id } = req.params;
  const { photo_url, clinical_comment, follow_up_date, next_follow_up_date, status } = req.body;

  if (!photo_url || !clinical_comment || !follow_up_date || !status) {
    return res.status(400).json({ message: 'Photo URL, clinical comment, follow-up date, and status are required.' });
  }

  try {
    const updatedInfo = await updatePetInfo(pet_id, {
      photo_url,
      clinical_comment,
      follow_up_date,
      next_follow_up_date,
      status,
    });

    res.status(200).json({
      message: 'Pet information updated successfully',
      data: updatedInfo,
    });
  } catch (error) {
    console.error('Error updating pet:', error.message);
    res.status(error.message === 'Pet not found' ? 404 : 500).json({ message: error.message });
  }
};

module.exports = { updatePet };
