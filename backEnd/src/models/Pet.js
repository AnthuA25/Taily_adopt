const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('User.js');

class Pet extends Model {}

Pet.init(
  {
    pet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING(2),
    },
    type: {
      type: DataTypes.STRING(50),
    },
    location: {
      type: DataTypes.STRING(50),
    },
    photo_url: {
      type: DataTypes.STRING(50),
    },
    state: {
      type: DataTypes.ENUM('available', 'adopted'),
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    modified_on: {
      type: DataTypes.DATE,
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
    modelName: "Pet",
    tableName: "pet",
    timestamps: false,
  }
);

module.exports = Pet;
