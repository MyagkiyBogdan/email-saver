CREATE DATABASE user_email_saver;

CREATE TABLE user_data (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    selectedCard VARCHAR(255) NOT NULL,
);
