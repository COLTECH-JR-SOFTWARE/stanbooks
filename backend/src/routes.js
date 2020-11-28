import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import BookController from './app/controllers/BookController';
import LoanController from './app/controllers/LoanController';
import SearchController from './app/controllers/SearchController';
import RecoveryController from './app/controllers/RecoveryController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/sessions', SessionController.store);
routes.post('/recovery-pass', RecoveryController.store);

routes.use(authMiddleware); // as rotas abaixo precisarão de autenticação para serem acessadas

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files', FileController.index);
routes.delete('/files/:id', FileController.delete);

routes.post('/books', BookController.store);
routes.get('/books', BookController.index);
routes.get('/books/:id', BookController.show);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

routes.get('/search/book', SearchController.store);

routes.post('/loan', LoanController.store);
routes.get('/loan', LoanController.index);
routes.get('/loan/:id', LoanController.show);
routes.delete('/loan/:id', LoanController.delete);

export default routes;
