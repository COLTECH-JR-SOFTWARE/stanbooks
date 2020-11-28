import { Op } from 'sequelize';

import Book from '../models/Book';
import File from '../models/File';

class SearchController {
  async store(req, res) {
    const query = `${req.query.name}%`;

    const bookExists = await Book.findAll({
      where: { name: { [Op.iLike]: query }, deleted_at: null },
      attributes: ['id', 'name', 'url', 'image_id'],
      include: [
        {
          model: File,
          attributes: ['url_image', 'image', 'name'],
        },
      ],
    });

    if (!bookExists) {
      return res.status(400).json({ error: 'Book not found' });
    }

    return res.json(bookExists);
  }
}

export default new SearchController();
