module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('files', 'url_image', {
      type: Sequelize.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('files', 'url_image');
  },
};
