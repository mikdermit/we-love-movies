require("dotenv").config();

const {
  DEVELOPMENT_URL = "postgresql://postgres@localhost/postgres",
  PRODUCTION_URL = "postgresql://postgres@localhost/postgres"
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DEVELOPMENT_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: __dirname + "/src/db/migrations"
    },
    seeds: {
      directory: __dirname + "/src/db/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: PRODUCTION_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: __dirname + "/src/db/migrations"
    },
    seeds: {
      directory: __dirname + "/src/db/seeds"
    }
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:"
    },
    migrations: {
      directory: __dirname + "/src/db/migrations"
    },
    seeds: {
      directory: __dirname + "/src/db/seeds"
    },
    useNullAsDefault: true
  }
};