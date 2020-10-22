import * as Yup from 'yup';
import moment from 'moment-timezone';

import User from '../models/User';
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

    // link agora é o ID do livro, pra simplificar
    const { link } = req.body;

    const date = new Date();

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

    const book_name = bookExist.name;

    const user = await User.findByPk(user_id);

    const { name, email } = user;

    const loan = { link, user_id, book_id, date };

    await Loan.create(loan);

    return res.json({ loan, name, email, book_name });
  }

  async index(req, res) {
    const id = req.userId;

    const a = moment.tz('America/Manaus').format();
    console.log(a);

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

    return res.json(books, a);
  }

  async show(req, res) {
    const { id } = req.params;

    const loan = await Loan.findByPk(id);

    return res.json(loan);
  }
}

export default new LoanController();
