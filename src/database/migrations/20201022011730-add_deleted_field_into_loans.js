module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('loans', 'deleted_at', {
      type: Sequelize.DATE,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('loans', 'deleted_at');
  },
};
