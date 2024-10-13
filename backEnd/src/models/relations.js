const User = require("./User");
const Pet = require("./Pet");
const AdoptionProcess = require("./AdoptionProcess");
const FollowUp = require("./FollowUp");

User.hasMany(Pet, { foreignKey: "user_id" });
Pet.belongsTo(User, { foreignKey: "user_id" });
Pet.hasMany(AdoptionProcess, { foreignKey: "pet_id" });

AdoptionProcess.belongsTo(Pet, { foreignKey: "pet_id" });
User.hasMany(AdoptionProcess, { foreignKey: "user_id" });
AdoptionProcess.belongsTo(User, { foreignKey: "user_id" });

AdoptionProcess.hasMany(FollowUp, { foreignKey: "process_id" });
FollowUp.belongsTo(AdoptionProcess, { foreignKey: "process_id" });