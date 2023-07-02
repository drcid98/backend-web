"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      turn: {
        type: Sequelize.INTEGER
      },
      winner: {
        type: Sequelize.INTEGER
      },
      stage: {
        type: Sequelize.INTEGER
      },
      num_players: {
        allowNull: false,
        defaultValue: 0,
        validate: {
          max: 4,
        },
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
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Games");
  }
};