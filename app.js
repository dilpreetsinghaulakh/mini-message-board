const express = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("messages", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const message = req.body;

  messages.push({
    text: message.messageText,
    user: message.messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

app.listen(PORT);
