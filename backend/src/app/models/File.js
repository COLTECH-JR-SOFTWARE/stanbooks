import Sequelize, { Model } from 'sequelize';
import aws from 'aws-sdk';

const s3 = new aws.S3();
class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        url_image: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // verificar se tem uma url_image da amazon
    // se não faz-se no local
    this.addHook('beforeSave', (file) => {
      if (!file.url_image) {
        file.url_image = `${process.env.APP_URL}/files/${file.image}`;
      }
    });

    this.addHook('beforeDestroy', (file) => {
      if (!process.env.STORAGE_TYPE === 's3') {
        return s3
          .deleteObject({
            Bucket: 'uploadstanbooks',
            Key: file.image,
          })
          .promise();
      }
    });

    return this;
  }
}

export default File;
