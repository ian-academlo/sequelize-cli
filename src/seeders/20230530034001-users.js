'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // llenar de informacion la tabla users
    return queryInterface.bulkInsert("users", [
      {
        username: "Iannacus",
        email: "ian.rosasmal@gmail.com",
        password: "1234",
      },
      {
        username: "Iannacus2",
        email: "ian.rosasmal2@gmail.com",
        password: "1234",
      },
      {
        username: "Iannacus3",
        email: "ian.rosasmal3@gmail.com",
        password: "1234",
      },
      {
        username: "Iannacus4",
        email: "ian.rosasmal4@gmail.com",
        password: "1234",
      },
      {
        username: "Iannacus5",
        email: "ian.rosasmal5@gmail.com",
        password: "1234",
      },
      {
        username: 'Iannacus6',
        email: 'ian.rosasmal6@gmail.com',
        password: '1234'
    },
    {
        username: 'Iannacus7',
        email: 'ian.rosasmal7@gmail.com',
        password: '1234'
    }

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  }
};
