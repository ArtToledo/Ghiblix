'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('plans', [{
      name: 'Básico',
      price: '21.9',
      profiles_count: '1'
    },
    {
      name: 'Padrão',
      price: '32.9',
      profiles_count: '2'
    },
    {
      name: 'Premium',
      price: '45.9',
      profiles_count: '4'
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('plans', null, {});
  }
};
