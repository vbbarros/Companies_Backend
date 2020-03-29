'use strict';
const bcrypt = require('bcryptjs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync('12341234', 8)
    return queryInterface.bulkInsert(
      'investors',
      [
        {
          investor_name: 'Teste Apple',
          email: 'testeapple@ioasys.com.br',
          password_hash: password,
          city: 'BH',
          country: 'Brasil',
          balance: 350000.0,
          photo: '/uploads/investor/photo/1/cropped4991818370070749122.jpg',
          portfolio_value: 350000.0,
          first_access: false,
          super_angel: false,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('investors');
  }
};
