const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(username, message) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}

// async function searchMessages(message) {
//   const { rows } = await pool.query(
//     "SELECT * FROM messages WHERE message ILIKE $1",
//     [`%${message}%`]
//   );
//   return rows;
// }

module.exports = {
  getAllMessages,
  insertMessage,
  // searchMessages,
};
