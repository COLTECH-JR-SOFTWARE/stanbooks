import { Op } from 'sequelize';

import Book from '../models/Book';

class SearchController {
  async store(req, res) {
    const query = `%${req.query.name}%`;

    const bookExists = await Book.findAll({
      where: { name: { [Op.iLike]: query } },
      attributes: ['id', 'name', 'url', 'image_id'],
    });

    if (!bookExists) {
      return res.status(400).json({ error: 'Book not found' });
    }

    return res.json(bookExists);
  }
}

export default new SearchController();
