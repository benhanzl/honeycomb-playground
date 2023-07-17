const productsRouter = require("express").Router();
const db = require("../utils/db");

productsRouter.get("/", async (_, response) => {
  const products = await db.product.findMany();

  response.json(products);
});

module.exports = productsRouter;
