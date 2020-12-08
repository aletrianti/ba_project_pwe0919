const config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    typeCast: (field, next) => {
      if (field.type == 'TINY' && field.length == 1) {
        let value = field.string()
        return value ? value == '1' : null
      }
      return next()
    },
  },
}

const knex = require('knex')(config)

// import Knex from "knex";
// const knex = new Knex.Client(config);
export default knex
