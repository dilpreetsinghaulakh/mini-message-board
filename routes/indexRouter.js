const { Router } = require("express");
const indexRouter = Router();

const messageController = require("../controllers/messagesController");

indexRouter.get("/", messageController.home);
indexRouter.post("/new", messageController.addNewMessage);

module.exports = indexRouter;
