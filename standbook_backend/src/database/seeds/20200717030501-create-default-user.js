const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Jamelao',
          email: 'admin@admin.com',
          password_hash: bcrypt.hashSync('123456', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  down: () => {},
};
