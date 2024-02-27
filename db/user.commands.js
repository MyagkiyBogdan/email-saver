
export const getUserByEmail = `SELECT * FROM users WHERE email = $1 LIMIT 1`;

export const createMainDatabase = `CREATE DATABASE user_email_saver`;

export const createUserEmailTable = `CREATE TABLE user_data (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  selectedCard VARCHAR(255) NOT NULL
)`;
