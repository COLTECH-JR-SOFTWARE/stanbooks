import Book from '../models/Book';
import Loan from '../models/Loan';

class LoanController {
  async store(req, res) {
    const { link } = req.body;

    const bookExist = await Book.findOne({
      where: { url: link },
    });

    if (!bookExist) {
      return res.status(400).json({ error: 'Book does not exist' });
    }

    const user_id = req.userId;
    const book_id = bookExist.id;

    const loan = { link, user_id, book_id };

    await Loan.create(loan);

    return res.json(loan);
  }

  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new LoanController();
