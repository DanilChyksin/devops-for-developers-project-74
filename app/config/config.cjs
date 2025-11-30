require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database.sqlite",
  },
  production: {
    dialect: "postgres",
    database: process.env.DATABASE_NAME || "example",
    username: process.env.DATABASE_USERNAME || "example",
    password: process.env.DATABASE_PASSWORD || "example",
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || "db",
  },
  test: {
    dialect: "postgres",
    database: process.env.DATABASE_NAME || "example",
    username: process.env.DATABASE_USERNAME || "example",
    password: process.env.DATABASE_PASSWORD || "example",
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || "db",
  },
};
