const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT);
