const express = require("express");
const cors = require("cors");
const userRouter = require("./routers");
const app = express();

app.use(express.json()).use(cors()).use("/", userRouter);

module.exports = app;
