const { Router } = require("express");
const indexRouter = Router();

const messageController = require("../controllers/messagesController");

indexRouter.get("/", messageController.home);

module.exports = indexRouter;
