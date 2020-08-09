import Book from '../models/Book';
import File from '../models/File';
import Loan from '../models/Loan';

class LoanController {
  async store(req, res) {
    const { id_book } = req.body;

    const bookExist = await Book.findOne({
      where: { id: id_book },
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

    const loan = { user_id, book_id };

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
}

export default new LoanController();
