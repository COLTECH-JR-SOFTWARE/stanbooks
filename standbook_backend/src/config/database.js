module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5436,
  username: 'postgres',
  password: 'docker',
  database: 'standbookDB',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
