const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const AdoptionProcess = require('./AdoptionProcess');

class FollowUp extends Model {}

FollowUp.init(
  {
    follow_up_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    process_id: {
      type: DataTypes.INTEGER,
      references: {
        model: AdoptionProcess,
        key: 'process_id',
      },
    },
    photo_url: {
      type: DataTypes.STRING(50),
    },
    follow_up_date: {
      type: DataTypes.DATE,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    clinical_comment: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM('pending', 'complete', 'overdue'),
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
    modelName: "FollowUp",
    tableName: "follow_up",
    timestamps: false,
  }
);

module.exports = FollowUp;
