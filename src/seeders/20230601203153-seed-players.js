module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Players', [
    {
      user_id: 1,
      game_id: 1,
      name: "akita",
      color: 1,
      troops: 20,
      territories: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Players', null, {}),
};
