const db = require('../dbKeys');

const config = {
  client: 'mysql2',
  connection: {
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    typeCast: (field, next) => {
      if (field.type == 'TINY' && field.length == 1) {
        let value = field.string();
        return value ? value == '1' : null;
      }
      return next();
    },
  },
};

const knex = require('knex')(config);

export default knex;
