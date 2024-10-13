// const { FollowUp } = require('../models');

// // Servicio para crear un seguimiento
// const createFollowUp = async (followUpData) => {
//   try {
//     const followUp = await FollowUp.create(followUpData);
//     return followUp;
//   } catch (error) {
//     throw new Error('Error creating follow-up');
//   }
// };

// // Servicio para actualizar un seguimiento
// const updateFollowUp = async (follow_up_id, updatedData) => {
//   try {
//     const followUp = await FollowUp.findByPk(follow_up_id);
    
//     if (!followUp) {
//       throw new Error('Follow-up not found');
//     }

//     Object.assign(followUp, updatedData);
//     await followUp.save();
//     return followUp;
//   } catch (error) {
//     throw new Error('Error updating follow-up');
//   }
// };

// module.exports = { createFollowUp, updateFollowUp };
