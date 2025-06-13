const { Router } = require("express");
const newRouter = Router();

const messageController = require("../controllers/messagesController");

newRouter.get("/", (req, res) => {
  res.render("form");
});
newRouter.post("/", messageController.addNewMessage);

module.exports = newRouter;
