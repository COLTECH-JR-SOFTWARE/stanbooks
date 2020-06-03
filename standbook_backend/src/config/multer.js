/**
 * Arquivo responsavel pelo upload de arquivos
 */
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    distination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        // esse é o nome do arquivo que vai ser salvo ex: u11u3g71381j.png
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
