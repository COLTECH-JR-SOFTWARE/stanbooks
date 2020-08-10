import * as Yup from 'yup';

import Book from '../models/Book';
import File from '../models/File';
import Loan from '../models/Loan';

class LoanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      link: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { link } = req.body;

    const bookExist = await Book.findOne({
      where: { id: link },
    });

    if (!bookExist) {
      return res.status(400).json({ error: 'Book does not exist' });
    }

    const bookBorrowed = await Loan.findOne({
      where: { book_id: bookExist.id, user_id: req.userId },
    });

    if (bookBorrowed) {
      return res.status(400).json({ error: 'Book already borrowed' });
    }

    const user_id = req.userId;
    const book_id = bookExist.id;

    const loan = { link, user_id, book_id };

    await Loan.create(loan);

    return res.json(loan);
  }

  async index(req, res) {
    const id = req.userId;

    const books = await Loan.findAll({
      where: { user_id: id },
      include: [
        {
          model: Book,
          attributes: ['name', 'image_id'],
          include: [
            {
              model: File,
              attributes: ['url_image', 'image', 'name'],
            },
          ],
        },
      ],
    });

    return res.json(books);
  }

  async delete(req, res) {
    const { id } = req.params;

    const indexExist = await Loan.findOne({
      where: { id },
    });

    if (!indexExist) {
      return res.status(400).json({ error: 'Loan not found' });
    }

    const loan = await Loan.findByPk(id);

    await loan.destroy();

    return res.json({ ok: true });
  }
}

export default new LoanController();
