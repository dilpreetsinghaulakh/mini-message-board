const pool = require("./pool");

exports.removeAllMessages = async (req, res) => {
  await pool.query("DELETE FROM messages");
};
