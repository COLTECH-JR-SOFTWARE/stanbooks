import Sequelize, { Model } from 'sequelize';

class Loan extends Model {
  static init(sequelize) {
    super.init(
      {
        link: Sequelize.STRING,
        date: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
      },
      {
        sequelize,
        paranoid: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Book, { foreignKey: 'book_id' });
  }
}

export default Loan;
