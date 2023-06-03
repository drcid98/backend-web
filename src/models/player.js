"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "user_id",
      }); 
      this.belongsTo(models.Game, {
        foreignKey: "game_id",
      }); 
      this.hasMany(models.Territory, {
        foreignKey: "id",
      });
    }
  }
  Player.init({
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    color: DataTypes.INTEGER,
    troops: DataTypes.INTEGER,
    territories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Player",
  });
  return Player;
};