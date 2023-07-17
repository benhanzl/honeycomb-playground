const productsRouter = require("express").Router();

productsRouter.get("/", (_, response) => {
  response.json([]);
});

module.exports = productsRouter;
