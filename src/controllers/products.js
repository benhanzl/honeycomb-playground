const productsRouter = require("express").Router();
const db = require("../utils/db");

productsRouter.get("/", async (_, response) => {
  const products = await db.product.findMany();

  response.json(products);
});

productsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;

  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return response.status(404).send("Not Found");
  }

  response.json(product);
});

module.exports = productsRouter;
