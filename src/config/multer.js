import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

export default {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
};

// export default {
//   storage: multer.diskStorage({
//     destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
//     filename: (req, file, cb) => {
//       crypto.randomBytes(16, (err, res) => {
//         if (err) return cb(err);

//         return cb(null, res.toString('hex') + extname(file.originalname));
//       });
//     },
//   }),
// };
