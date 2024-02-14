'use strict';

const airport = require('../models/airport');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airports',[
      {
        name: 'Kempegowda International airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mysoro International airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
      {
        name: 'mengluru International airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indra gandhi International airport',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
