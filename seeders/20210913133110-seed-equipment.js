module.exports = {
  up: async (queryInterface) => {
    const equipmentList = [
      {
        name: 'drum sticks',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'arms',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'triangle',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'recorder',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const equipment = await queryInterface.bulkInsert('equipment', equipmentList, { returning: true });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('equipment', null, {});
  },
};
