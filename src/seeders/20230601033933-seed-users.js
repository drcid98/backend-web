module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      username:'boris',
      password:'nicolito',
      mail:'borito@nicolito.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'uwu',
      password:'uwu123',
      mail:'jiji@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};