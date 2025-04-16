const messages = require("../models/messages");

exports.home = (req, res) => {
  res.render("messages", { messages: messages });
};
exports.addNewMessage = (req, res) => {
  const message = req.body;

  messages.push({
    text: message.messageText,
    user: message.messageUser,
    added: new Date(),
  });

  res.redirect("/");
};
