import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        url: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'image_id' });
  }
}

export default Book;
