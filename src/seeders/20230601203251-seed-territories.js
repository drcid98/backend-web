module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Territories', [
    {
      player_id: 1,
      game_id: 1,
      troops: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      player_id: 2,
      game_id: 1,
      troops: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Territories', null, {}),
};
