import db from "./connection.js";

async function createTable() {
  try {
    await db.none(`
      CREATE TABLE user_data (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        selectedCard VARCHAR(255) NOT NULL
      );
    `);
    console.log("Table 'user_data' created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    db.$pool.end();
  }
}

createTable();
