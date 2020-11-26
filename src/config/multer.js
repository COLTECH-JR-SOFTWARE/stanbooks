import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.image = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, file.image);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'uploadstanbooks',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.image = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, file.image);
      });
    },
  }),
};

export default {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
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
