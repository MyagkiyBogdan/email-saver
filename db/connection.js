import pgp from "pg-promise";

const dbConfig = {
  host: "localhost",
  port: 5432,
  database: "user_email_saver",
  user: "postgres",
  password: process.env.DB_PASSWORD,
};

const pgpInstance = pgp();
const db = pgpInstance(dbConfig);

export default db;
