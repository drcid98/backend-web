module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert("Games", [
    {
      turn: 1,
      winner: null,
      stage:1,
      num_players:0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete("Games", null, {}),

};
