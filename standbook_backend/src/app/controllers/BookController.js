import * as Yup from 'yup';

import Book from '../models/Book';
import User from '../models/User';
import File from '../models/File';

class BookController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      url: Yup.string().url().required(),
      image_id: Yup.number().integer().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!userProvider) {
      return res
        .status(400)
        .json({ error: 'Only providers can register a book' });
    }

    const imageExist = await File.findOne({
      where: { id: req.body.image_id },
    });

    if (!imageExist) {
      return res.status(400).json({ error: 'Image does not exist' });
    }

    const bookExists = await Book.findOne({
      where: { url: req.body.url },
    });

    if (bookExists) {
      return res.status(400).json({ error: 'Book already registered' });
    }

    const { name, url, image_id } = await Book.create(req.body);

    return res.json({
      name,
      url,
      image_id,
    });
  }

  async index(req, res) {
    const books = await Book.findAll({
      where: { deleted_at: null },
      attributes: ['id', 'name', 'url', 'image_id'],
      include: [
        {
          model: File,
          attributes: ['url_image', 'image', 'name'],
        },
      ],
    });

    return res.json(books);
  }

  async show(req, res) {
    const { id } = req.params;

    const indexExist = await Book.findOne({
      where: { id },
    });

    if (!indexExist) {
      return res.status(400).json({ error: 'Book not found' });
    }

    const book = await Book.findAll({
      where: { id, deleted_at: null },
      attributes: ['id', 'name', 'url', 'image_id'],
      include: [
        {
          model: File,
          attributes: ['url_image', 'image', 'name'],
        },
      ],
    });

    return res.json(book);
  }

  async update(req, res) {
    const { id } = req.params;

    const indexExist = await Book.findOne({
      where: { id },
    });

    if (!indexExist) {
      return res.status(400).json({ error: 'Book not found' });
    }

    const { name, url } = req.body;

    const book = await Book.findByPk(id);

    const userProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!userProvider) {
      return res.status(400).json({ error: 'Only providers can edit a book' });
    }

    if (url !== book.url) {
      const bookExists = await Book.findOne({
        where: { url: req.body.url },
      });

      if (bookExists) {
        return res.status(400).json({ error: 'Book already registered' });
      }
    }

    await book.update(req.body);

    const { image_id } = await Book.findByPk(id, {
      include: [
        {
          model: File,
          attributes: ['id', 'image', 'url_image'],
        },
      ],
    });

    return res.json({
      id,
      name,
      url,
      image_id,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const indexExist = await Book.findOne({
      where: { id },
    });

    if (!indexExist) {
      return res.status(400).json({ error: 'Book not found' });
    }

    const book = await Book.findByPk(id);

    const userProvider = await User.findOne({
      where: { provider: true },
    });

    if (!userProvider) {
      return res
        .status(400)
        .json({ error: 'Only providers can delete a book' });
    }

    book.deleted_at = new Date();

    await book.save();

    return res.json(book);
  }
}

export default new BookController();
