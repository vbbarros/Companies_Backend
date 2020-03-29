'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'enterprises',
      [
        {
          enterprise_name: 'AllRide',
          description:
            'Urbanatika is a socio-environmental company with economic impact, creator of the agro-urban industry. We want to involve people in the processes of healthy eating, recycling and reuse of organic waste and the creation of citizen green areas. With this we are creating smarter cities from the people and at the same time the forest city.  Urbanatika, Agro-Urban Industry',
          email_enterprise: '',
          facebook: '',
          twitter: '',
          linkedin: '',
          phone: '',
          own_enterprise: false,
          photo:
            '/uploads/enterprise/photo/1/wood_trees_gloomy_fog_haze_darkness_50175_1920x1080.jpg',
          value: 0,
          shares: 100,
          share_price: 10000.0,
          own_shares: 0,
          city: 'Santiago',
          country: 'Chile',
          enterprise_type_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          enterprise_name: 'AQM S.A.',
          description:
            'Cold Killer was discovered by chance in the ´90 s and developed by Mrs. Inés Artozon Sylvester while she was 70 years old. Ending in a U.S. patent granted and a new company, AQM S.A. Diluted in water and applied to any vegetable leaves, stimulate increase glucose (sugar) up to 30% therefore help plants resists cold weather. ',
          email_enterprise: '',
          facebook: '',
          twitter: '',
          linkedin: '',
          phone: '',
          own_enterprise: false,
          photo:
            '/uploads/enterprise/photo/2/WhatsApp_Image_2017-10-31_at_13.47.22.jpeg',
          value: 0,
          shares: 100,
          share_price: 10000.0,
          own_shares: 0,
          city: 'Viña del Mar',
          country: 'Chile',
          enterprise_type_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enterprises');
  }
};
