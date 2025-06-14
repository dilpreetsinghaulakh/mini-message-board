const { getAllMessages, insertMessage } = require("../db/queries");

exports.home = async (req, res) => {
  const messages = await getAllMessages();
  res.render("messages", { messages: messages });
};
exports.addNewMessage = (req, res) => {
  const message = req.body;

  try {
    insertMessage(message.messageUser, message.messageText);
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting message:", error);
    res.status(500).send("Internal Server Error");
  }
};
