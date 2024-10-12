const User = require('./models/User');
const Pet = require('./models/Pet');
const AdoptionProcess = require('./models/AdoptionProcess');
const FollowUp = require('./models/FollowUp');
const Post = require('./models/Post');

// Relacionar modelos
User.hasMany(Pet, { foreignKey: 'user_id' });
Pet.belongsTo(User, { foreignKey: 'user_id' });

AdoptionProcess.belongsTo(Pet, { foreignKey: 'pet_id' });
AdoptionProcess.belongsTo(User, { foreignKey: 'user_id' });

FollowUp.belongsTo(AdoptionProcess, { foreignKey: 'process_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });
