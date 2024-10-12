const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Pet = require('./Pet');

class AdoptionProcess extends Model {}

AdoptionProcess.init(
  {
    process_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pet,
        key: 'pet_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    adoption_date: {
      type: DataTypes.DATE,
    },
    adoption_days: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM('pending', 'finalized', 'cancelled'),
    },
    created_by: {
      type: DataTypes.INTEGER,
    },
    modified_by: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "AdoptionProcess",
    tableName: "adoption_process",
    timestamps: false,
  }
);

module.exports = AdoptionProcess;
