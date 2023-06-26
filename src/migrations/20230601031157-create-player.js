'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" }, 
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: { model: "Games", key: "id" }, 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: "game_name_constraint" // Nombre de la restricción única para el nombre del jugador dentro de un juego
      },
      color: {
        type: Sequelize.INTEGER,
        unique: "game_color_constraint" // Nombre de la restricción única para el color del jugador dentro de un juego
      },
      troops: {
        type: Sequelize.INTEGER
      },
      territories: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Agregar restricciones de clave externa
    await queryInterface.addConstraint("Players", {
      fields: ["game_id", "color"],
      type: "unique",
      name: "unique_game_color_constraint" // Nombre de la restricción única para el color del jugador dentro de un juego
    });
  },
  async down(queryInterface) {
    // Eliminar restricciones de clave externa
    await queryInterface.removeConstraint("Players", "unique_game_color_constraint");
    await queryInterface.dropTable("Players");
  }
};
