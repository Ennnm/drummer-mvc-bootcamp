module.exports = {
  up: async (queryInterface) => {
    const userList = [
      {
        name: 'kai',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'nan',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    // like returning all in sql
    const users = await queryInterface.bulkInsert(
      'users',
      userList,
      { returning: true },
    );

    const reservations = [];
    for (let i = 0; i < users.length; i += 1) {
      const user = users[i].id;

      reservations.push({
        user_id: user,
        reservation_date: '2021-01-01',

        created_at: new Date(),
        updated_at: new Date(),
      });

      reservations.push({
        user_id: user,
        created_at: new Date(),
        updated_at: new Date(),
        reservation_date: '2021-01-15',
      });
    }
    queryInterface.bulkInsert('reservations', reservations);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('reservations', null, {});
  },
};
