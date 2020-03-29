'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'enterprise_types',
      [
        {
          enterprise_type_name: 'Agro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          enterprise_type_name: 'Software',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ] 
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enterprise_types');
  }
};
