module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert("Users", [
    {
      username:"drcid",
      password:"borito",
      mail:"drcid@uc.cl",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:"gvfigueroa",
      password:"uwu123",
      mail:"gvfigueroa@uc.cl",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:"qwerty",
      password:"borito",
      mail:"drcid2@uc.cl",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:"asdasd",
      password:"borito",
      mail:"drcid3@uc.cl",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};