import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Book from '../app/models/Book';
import Loan from '../app/models/Loan';

const models = [User, File, Book, Loan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.sequelize = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.sequelize))
      .map(
        (model) => model.associate && model.associate(this.sequelize.models)
      );
  }
}

export default new Database();
