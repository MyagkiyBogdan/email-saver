import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  host: "localhost",
  port: 5432,
  database: "  database: "user_email_saver",",
  user: "postgres",
  password: process.env.DB_PASSWORD,
};

const pgpInstance = pgp();
const db = pgpInstance(dbConfig);

async function createDatabase() {
  try {
    await db.none("CREATE DATABASE user_email_saver");
    console.log("Database 'user_email_saver' created successfully.");
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    pgpInstance.end();
  }
}

createDatabase();
