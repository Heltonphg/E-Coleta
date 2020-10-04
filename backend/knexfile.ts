import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123',
    database : 'nlw2'
  },
  useNullAsDefault: true,
  migrations :{
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
};