'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('job_tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      job_titel: {
        type: Sequelize.STRING
      },
      date_applied: {
        type: Sequelize.DATEONLY
      },
      city: {
        type: Sequelize.STRING
      },
      company_responded: {
        type: Sequelize.BOOLEAN
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('job_tracks');
  }
};