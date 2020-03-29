'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enterprises', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      enterprise_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      email_enterprise: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      twitter: {
        type: Sequelize.STRING,
      },
      linkedin: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      own_enterprise: {
        type: Sequelize.BOOLEAN,
      },
      photo: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.DOUBLE,
      },
      shares: {
        type: Sequelize.INTEGER,
      },
      share_price: {
        type: Sequelize.DOUBLE,
      },
      own_shares: {
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      enterprise_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'enterprise_types',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('enterprises');
  },
};

