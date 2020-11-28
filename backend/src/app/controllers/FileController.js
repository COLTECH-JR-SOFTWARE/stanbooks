import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, image, location: url_image = '' } = req.file;

    const file = await File.create({
      name,
      image,
      url_image,
    });

    return res.json(file);
  }

  async index(req, res) {
    const files = await File.findAll();

    return res.json(files);
  }

  async delete(req, res) {
    const file = await File.findByPk(req.params.id);

    await file.destroy();

    return res.send();
  }
}

export default new FileController();
