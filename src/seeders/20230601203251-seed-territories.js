module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert("Territories", [
    {
      player_id: 1,
      game_id: 1,
      troops: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 1,
      game_id: 1,
      troops: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 1,
      game_id: 1,
      troops: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 1,
      game_id: 1,
      troops: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 1,
      game_id: 1,
      troops: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 1,
      game_id: 1,
      troops: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      game_id: 1,
      troops: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      game_id: 1,
      troops: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      game_id: 1,
      troops: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      game_id: 1,
      troops: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      game_id: 1,
      troops: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 3,
      game_id: 1,
      troops: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      game_id: 1,
      troops: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      game_id: 1,
      troops: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      game_id: 1,
      troops: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      game_id: 1,
      troops: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      game_id: 1,
      troops: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 4,
      game_id: 1,
      troops: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete("Territories", null, {}),
};
