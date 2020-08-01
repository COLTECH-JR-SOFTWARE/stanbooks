import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: image } = req.file;

    const file = await File.create({
      name,
      image,
    });

    return res.json(file);
  }
}

export default new FileController();
