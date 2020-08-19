import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: image } = req.file;

    const file = await File.create({
      name,
      image,
      url_image: '',
    });

    return res.json(file);
  }

  async index(req, res) {
    const files = await File.findAll();

    return res.json(files);
  }
}

export default new FileController();
