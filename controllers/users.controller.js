import validator from "validator";
import db from "../db/connection.js";

const getUserByEmail = `
  SELECT *
  FROM user_data
  WHERE email = $1
`;

const createUserQuery = `
  INSERT INTO user_data (email, selectedCard)
  VALUES ($1, $2)
  RETURNING *
`;

export const createUserData = async (req, res) => {
  const { email, selectedCard } = req.body;

  if (!email || !selectedCard) {
    return res
      .status(400)
      .json({ error: "Email and selectedCard are required fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const existingUser = await db.oneOrNone(getUserByEmail, [email]);
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "A user with this email already exists" });
    }

    const newUser = await db.one(createUserQuery, [email, selectedCard]);
    res.status(201).json({ status: "ok", newUser });
  } catch (error) {
    console.error("Error when creating a user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
