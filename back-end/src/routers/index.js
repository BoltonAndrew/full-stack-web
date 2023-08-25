const userRouter = require("express").Router();
const User = require("../models");

userRouter.post("/", async function (req, res) {
  try {
    const user = await User.create(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ err: error });
  }
});

module.exports = userRouter;
