module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },

        },
        reservation_date: {
          allowNull: false,
          type: Sequelize.DATEONLY,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reservations');
  },
};
