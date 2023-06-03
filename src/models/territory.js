"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Territory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Player, {
        foreignKey: "player_id",
      }); 
      this.belongsTo(models.Game, {
        foreignKey: "game_id",
      }); 
    }
  }
  Territory.init({
    player_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    troops: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Territory",
  });
  return Territory;
};