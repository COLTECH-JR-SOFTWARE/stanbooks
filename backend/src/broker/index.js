import aedes from 'aedes';
import mqtt from 'mqtt';
import server from 'net';

import Book from '../app/models/Book';
import File from '../app/models/File';
import Loan from '../app/models/Loan';

const broker = server.createServer(aedes().handle);
const port = process.env.BROKER_PORT || 3001;

broker.listen(port, () => {
  console.log(`Broker mqtt started and listening on port ${port}`);
});

const getBooks = async () => {
  const bookList = await Book.findAll({
    where: { deleted_at: null },
    attributes: ['id', 'name', 'url', 'image_id'],
    include: [
      {
        model: File,
        attributes: ['url_image', 'image', 'name'],
      },
    ],
  });

  return bookList;
};

const getLoan = async (userId) => {
  const loansList = await Loan.findAll({
    where: { user_id: userId, deleted_at: null },
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

  return loansList;
};

const publisher = async (id) => {
  const books = await getBooks();
  const loans = await getLoan(id);

  const allBooksList = books.map((book) => parseInt(book.id, 10));
  const bookedBooksList = loans.map((loan) => parseInt(loan.id, 10));

  const data = {
    allBooksList,
    bookedBooksList,
  };

  const client = mqtt.connect(`mqtt://localhost:${port}`);
  const topic = 'StanbooksMQTTTopic';
  const message = JSON.stringify(data);

  client.on('connect', () => {
    client.publish(topic, message);
  });
};

export default publisher;
